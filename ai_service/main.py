from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import tflite_runtime.interpreter as tflite
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # En producción puedes restringirlo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------------------------
# Load TFLite model (1-time)
# -----------------------------------------------------
interpreter = tflite.Interpreter(model_path="model.tflite")
interpreter.allocate_tensors()

input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()


# -----------------------------------------------------
# Request body schema
# -----------------------------------------------------
class ImagePayload(BaseModel):
    image: str   # Base64 PNG from canvas


# -----------------------------------------------------
# Prediction endpoint
# -----------------------------------------------------
@app.post("/predict")
def predict(payload: ImagePayload):
    # Decode base64 image
    img_data = base64.b64decode(payload.image.split(",")[1])
    img = Image.open(BytesIO(img_data)).convert("L")  # Gray scale

    # Resize to 28x28
    img = img.resize((28, 28))

    # Convert to numpy array (0..1)
    img_array = np.array(img, dtype=np.float32) / 255.0

    # Reshape to model input (1, 28, 28, 1)
    img_array = img_array.reshape(1, 28, 28, 1)

    # Run inference
    interpreter.set_tensor(input_details[0]['index'], img_array)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])

    # Return top prediction
    return {
        "prediction": int(np.argmax(output)),
        "probabilities": output.tolist()
    }

"use client";
import { useRef, useEffect, useState } from "react";

export default function NumbersDetectorPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    // Fondo negro
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estilo del lápiz
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
  }, []);

  // ---------------- SEND TO AI ----------------

  const sendToAI = async () => {
    const canvas = canvasRef.current!;
    const base64 = canvas.toDataURL("image/png");

    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64 }),
    });

    const data = await res.json();
    setPrediction(
      data.prediction !== undefined ? data.prediction : null
    );
  };

  // ---------------- MOUSE EVENTS ----------------

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    drawMouse(e);
  };

  const drawMouse = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    );
    ctx.stroke();
  };

  const stopDrawingMouse = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath();
  };

  // ---------------- TOUCH EVENTS (MOBILE) ----------------

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    drawTouch(e);
  };

  const drawTouch = (e: React.TouchEvent) => {
    if (!isDrawing) return;

    const touch = e.touches[0];
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(
      touch.clientX - rect.left,
      touch.clientY - rect.top
    );
    ctx.stroke();
  };

  const stopDrawingTouch = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath();
  };

  // ---------------- UTILS ----------------

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    setPrediction(null); // reset pred
  };

  // ---------------- RENDER ----------------

  return (
    <main className="flex flex-col items-center gap-4 p-8 text-white">
      <h1 className="text-2xl font-bold">Draw a number</h1>

      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        className="border border-gray-500 touch-none cursor-crosshair"

        // --- Mouse ---
        onMouseDown={handleMouseDown}
        onMouseMove={drawMouse}
        onMouseUp={stopDrawingMouse}
        onMouseLeave={stopDrawingMouse}

        // --- Touch ---
        onTouchStart={handleTouchStart}
        onTouchMove={drawTouch}
        onTouchEnd={stopDrawingTouch}
        onTouchCancel={stopDrawingTouch}
      />

      <div className="flex gap-4">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-gray-700 rounded"
        >
          Clear
        </button>

        <button
          onClick={sendToAI}
          className="px-4 py-2 bg-green-600 rounded"
        >
          Predict
        </button>
      </div>

      {prediction !== null && (
        <div className="mt-4 text-xl">
          Prediction: <span className="font-bold">{prediction}</span>
        </div>
      )}
    </main>
  );
}

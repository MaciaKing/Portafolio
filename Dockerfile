# ============================
#  STAGE 1: Builder
# ============================
FROM node:18-alpine AS builder

WORKDIR /app

# Copiamos dependencias primero (mejor cacheo)
COPY package*.json ./

RUN npm install

# Copiamos el resto del código
COPY . .

# Construimos Next.js para producción
RUN npm run build

# ============================
#  STAGE 2: Runner
# ============================
FROM node:18-alpine AS runner

WORKDIR /app

# Copiamos solo lo necesario desde el builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

# Comando final
CMD ["npm", "start", "--", "-p", "3000", "-H", "0.0.0.0"]

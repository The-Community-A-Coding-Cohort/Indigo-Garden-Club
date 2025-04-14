# 1 ---- Install dependencies ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 2 ---- Build the application ----
FROM node:20-alpine AS builder
WORKDIR /app
# Copy node_modules from deps and the source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
# Install required build tools for native modules
RUN apk update && \
    apk add --no-cache python3 make g++
# Native dependencies must be rebuilt or installed in the same stage as build
RUN export PYTHON=$(which python3) && npm rebuild bcrypt --build-from-source
RUN npm rebuild lightningcss
RUN npm install @tailwindcss/oxide-linux-arm64-musl
RUN npm run build

# 3 ---- Production image ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# Copy built application and dependencies
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
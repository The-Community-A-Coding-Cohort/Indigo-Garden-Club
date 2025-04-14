# 1 ---- Install dependencies ----
FROM node:23-bullseye-slim AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
# Rebuild native modules for the current architecture
RUN npm rebuild lightningcss

# 2 ---- Build the application ----
FROM node:23-bullseye-slim AS builder
WORKDIR /app
# Copy node_modules from deps and the source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# OS Specific and cannot be installed on all OS, but required for alpine
RUN npx prisma generate
RUN npm install --save-dev @tailwindcss/oxide-linux-arm64-gnu
RUN npm run build

# 3 ---- Production image ----
FROM node:23-bullseye-slim AS runner
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
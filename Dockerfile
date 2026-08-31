# MedhaIQ ERP - Production Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package manifests and lockfiles
COPY package*.json ./
COPY server/package*.json ./server/
COPY client/package*.json ./client/

# Install dependencies
RUN npm run setup

# Copy application source code
COPY . .

# Build application
RUN npm run build

# Expose API and Web ports
EXPOSE 5000 3000

# Entrypoint start command
CMD ["npm", "run", "start"]

# Use the official Node.js LTS image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app (compiles TypeScript to dist/)
RUN npm run build

# Set the environment variable for the port (used by Cloud Run)
ENV PORT=8080

# Expose the port (optional, for clarity)
EXPOSE 8080

# Start the server
CMD ["npm", "start"]

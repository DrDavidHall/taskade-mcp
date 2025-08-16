# Use the official Node.js LTS image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the TypeScript app (optional: remove if not using TypeScript)
RUN npm run build

# Set the command to start the server
CMD ["npm", "start"]

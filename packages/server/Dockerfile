# Use the official Node.js LTS image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and lock file first (better cache usage)
COPY package.json package-lock.json ./

# Install dependencies safely
RUN npm install --legacy-peer-deps

# Copy the rest of the app source code
COPY . .

# Build the app
RUN npm run build

# Start the server
CMD ["npm", "start"]

# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the app source code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Expose the desired port (e.g., 3000 for React apps)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

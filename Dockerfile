# Use the official Node.js 14 image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the app files to the container
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

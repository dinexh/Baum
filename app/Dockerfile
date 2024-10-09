# Use the official Node.js image for building the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight server to serve the app
FROM nginx:alpine

# Copy the build output to NGINX's public folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the NGINX port
EXPOSE 80

# Command to run the server
CMD ["nginx", "-g", "daemon off;"]

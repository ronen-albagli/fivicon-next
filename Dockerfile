# Use Node.js 14.x as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Build the Next.js app with TypeScript
RUN npm run build

# Set the command to start the app in production mode
# CMD ["npm", "start"]

# Use Node.js as our base (like choosing the kitchen equipment)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first (for better caching)
COPY package.json .

# Install dependencies (like buying ingredients)
RUN npm install

# Copy all other files
COPY . .

# Tell Docker this container uses port 3000
EXPOSE 3000

# Command to start the server
CMD ["node", "server.js"]

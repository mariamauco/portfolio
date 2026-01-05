# Build app first

# Use node image including npm
FROM node:18-alpine AS build
WORKDIR /app
# Copy package files first
COPY package*.json ./
# Install all dependencies
RUN npm install
# Copy the rest of your application code
COPY . .
RUN npm run build


# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
# Expose the port React runs on
EXPOSE 3000
# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]
FROM node:18-alpine AS base
WORKDIR /app

# Dependency layer (cached between builds)
FROM base AS deps
COPY package*.json ./
RUN npm install

# Dev stage for docker compose: mount source and hot-reload
FROM deps AS dev
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "start"]

# Build the production bundle
FROM deps AS build
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
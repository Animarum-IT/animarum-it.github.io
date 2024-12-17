# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine as builder

COPY . app
WORKDIR /app
RUN npm install && npm run build

EXPOSE 3000
ENV PORT=3000

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built assets from builder stage to nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

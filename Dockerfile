# Build stage: compile static site (Astro / Vite / plain static)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Runtime: tiny nginx with SPA fallback
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN printf 'server {\n    listen 3000;\n    server_name localhost;\n    root /usr/share/nginx/html;\n    index index.html;\n    location / {\n        try_files \$uri \$uri/ /index.html;\n    }\n    location ~* \\.(png|jpg|jpeg|gif|webp|avif|svg|ico|css|js|woff2?)$ {\n        expires 30d;\n        add_header Cache-Control "public, max-age=2592000, immutable";\n    }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

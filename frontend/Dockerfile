# ---- Stage 1: Build ----
FROM node:20-slim AS builder

WORKDIR /app

# Build args para variaveis VITE (precisam existir no build, nao em runtime)
ARG VITE_API_URL
ARG VITE_APP_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_APP_URL=$VITE_APP_URL

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---- Stage 2: Producao ----
FROM nginx:1.27-alpine

# Remove config padrao do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build do Vue
COPY --from=builder /app/dist /usr/share/nginx/html

# Config para SPA (Vue Router precisa de fallback para index.html)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

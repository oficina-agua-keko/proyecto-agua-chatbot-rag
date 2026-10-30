# Imagen "web" del despliegue: la página de demostración con el widget, servida por nginx,
# que además reenvía /api/chat al BFF (mismo origen: el navegador no ve el BFF ni el ApiRest).
FROM node:22-alpine AS compilacion
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx vite build --config vite.demo.config.ts

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compilacion /build/dist-demo /usr/share/nginx/html
EXPOSE 80

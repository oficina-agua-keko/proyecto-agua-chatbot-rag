# Imagen del BFF: solo usa módulos de Node, así que no hay dependencias que instalar.
FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
ENV BFF_PORT=3000
USER node
EXPOSE 3000
CMD ["node", "src/server.js"]

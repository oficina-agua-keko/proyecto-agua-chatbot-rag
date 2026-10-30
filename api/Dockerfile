# syntax=docker/dockerfile:1
# Imagen del ApiRest del chatbot. Se construye desde la raíz del repositorio (necesita content/):
#   docker compose -f docker-compose.aws.yml build api
# Etapa 1: Maven y JDK 21 compilan (no hace falta tenerlos instalados).
# Etapa 2: solo el JRE, el .jar y el contenido para la ingesta, con un usuario sin privilegios.

FROM maven:3.9.9-eclipse-temurin-21 AS compilacion
WORKDIR /build
COPY api/pom.xml .
COPY api/src ./src
RUN --mount=type=cache,target=/root/.m2 mvn -B -q -DskipTests package

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=compilacion /build/target/chatbot-api-*.jar app.jar
COPY content/ content/
ENV CHATBOT_CHUNKING_RUTA=/app/content
USER app
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

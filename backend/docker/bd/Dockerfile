FROM postgres:14.1-alpine
ENV POSTGRES_PASSWORD=carteira
ENV POSTGRES_USER=carteira
ENV POSTGRES_DB=carteira
COPY scripts/* /docker-entrypoint-initdb.d/

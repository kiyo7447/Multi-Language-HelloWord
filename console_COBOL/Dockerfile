FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    open-cobol \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

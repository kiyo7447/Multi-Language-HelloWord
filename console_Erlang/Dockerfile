FROM erlang:latest

COPY ./hello.erl /app/
WORKDIR /app

RUN erlc hello.erl

CMD ["erl", "-noshell", "-s", "hello", "start", "-s", "init", "stop"]

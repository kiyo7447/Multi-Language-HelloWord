FROM haskell:8.10

WORKDIR /app

COPY ./Hello.hs .

RUN ghc -o Hello Hello.hs

CMD ["./Hello"]

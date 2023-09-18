# ベースとなるイメージを指定
FROM hseeberger/scala-sbt:11.0.12_1.5.5_2.13.6 as build

# ソースコードをコピー
COPY . /app
WORKDIR /app

# Scalaのコードをコンパイル
RUN sbt compile

# コンパイルしたファイルを実行
CMD ["sbt", "run"]

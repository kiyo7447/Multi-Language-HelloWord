# Clojureイメージをベースにする
FROM clojure:lein

# ワークディレクトリを設定
WORKDIR /usr/src/app

# 依存関係をコピーしてインストール
COPY project.clj .
RUN lein deps

# ソースコードをコピー
COPY . .

# プログラムを実行
CMD ["lein", "run"]

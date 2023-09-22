# Elixirの公式イメージをベースにする
FROM elixir:latest

# ワーキングディレクトリを設定
WORKDIR /app

# ローカルのhello_world.exsをコンテナにコピー
COPY hello.exs .

# スクリプトを実行
CMD ["elixir", "hello.exs"]

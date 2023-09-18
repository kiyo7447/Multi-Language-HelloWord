# ベースイメージを指定
FROM denoland/deno:latest

# 作業ディレクトリを設定
WORKDIR /app

# ローカルのworld.tsをコンテナにコピー
COPY hello.ts .

# スクリプトを実行
CMD ["deno", "run", "hello.ts"]

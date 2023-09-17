# ベースとなるイメージを指定
FROM node:14

# 作業ディレクトリを指定
WORKDIR /usr/src/app

# ファイルをコピー
COPY hello.js .

# コンテナが起動した際に実行されるコマンド
CMD [ "node", "hello.js" ]

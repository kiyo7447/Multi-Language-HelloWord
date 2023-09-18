# ベースとなるイメージを指定
FROM ruby:latest

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# ローカルのファイルをコンテナ内にコピー
COPY . .

# スクリプトを実行
CMD ["ruby", "hello.rb"]

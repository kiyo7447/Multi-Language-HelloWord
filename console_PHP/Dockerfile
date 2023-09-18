# 基本イメージを指定
FROM php:7.4-cli

# 作業ディレクトリを設定
WORKDIR /usr/src/myapp

# ローカルのファイルをコンテナにコピー
COPY hello.php .

# コマンドを実行
CMD [ "php", "./hello.php" ]

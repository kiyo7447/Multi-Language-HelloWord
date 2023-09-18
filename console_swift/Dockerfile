# 公式のSwiftイメージをベースとして使用
FROM swift:latest

# ワークディレクトリを設定
WORKDIR /app

# ホストのソースコードをコンテナにコピー
COPY . .

# コンパイル
RUN swiftc Hello.swift

# 実行
CMD ["./Hello"]

# 基本イメージとしてC++がコンパイルできる環境を設定
FROM gcc:latest

# 作業ディレクトリを設定
WORKDIR /app

# ローカルのC++ファイル（Hello.cpp）をコンテナにコピー
COPY Hello.cpp .

# C++プログラムをコンパイル
RUN g++ Hello.cpp -o Hello

# プログラムを実行
CMD ["./Hello"]

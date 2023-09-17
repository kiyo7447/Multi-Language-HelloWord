# ベースイメージとしてOpenJDKを使用
FROM openjdk:11-jdk

# Kotlinのバージョンを指定
ENV KOTLIN_VERSION=1.5.31

# Kotlinコンパイラをダウンロードし、インストール
RUN curl -L https://github.com/JetBrains/kotlin/releases/download/v${KOTLIN_VERSION}/kotlin-compiler-${KOTLIN_VERSION}.zip -o /tmp/kotlin-compiler.zip \
    && unzip /tmp/kotlin-compiler.zip -d /opt \
    && rm /tmp/kotlin-compiler.zip

# Kotlinコンパイラのバイナリへのパスを設定
ENV PATH=$PATH:/opt/kotlinc/bin

# ソースコードをコンテナにコピー
COPY . /app
WORKDIR /app

# ソースコードをコンパイル
RUN kotlinc hello.kt -include-runtime -d HelloWorld.jar

# コマンドを設定（コンテナが起動したときに実行）
CMD ["java", "-jar", "HelloWorld.jar"]

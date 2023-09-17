
# Operation System
## インストール方法
```bash
wsl
sudo apt install kotlin
# ん？インストール出来ないぞ？
```
## 実行方法
```bash
kotlinc HelloWorld.kt -include-runtime -d HelloWorld.jar
java -jar HelloWorld.jar
```
# Docker
インストールに失敗したので、Dockerで実行することにした。
```bash
# Build
docker build -t kotlin-hello-world .
# Run
docker run --name kotlin-hello-world --rm kotlin-hello-world
```

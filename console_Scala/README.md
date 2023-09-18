# Scala
## Dockerでの実行方法
```powershell
docker build -t scala-image .
docker run --rm --name scala-hello-world scala-image
``` 
## なんか実行したら色々メッセージが出力された
```powershell
o$ docker run --rm --name scala-hello-world scala-image
[info] welcome to sbt 1.5.5 (Oracle Corporation Java 11.0.12)
[info] loading project definition from /app/project
[info] set current project to app (in build file:/app/)
[info] running HelloWorld 
Hello, World!
[success] Total time: 1 s, completed Sep 18, 2023, 3:09:33 AM
o$ docker run --rm --name scala-hello-world scala-image
[info] welcome to sbt 1.5.5 (Oracle Corporation Java 11.0.12)
[info] loading project definition from /app/project
[info] set current project to app (in build file:/app/)
[info] running HelloWorld 
Hello, World!
[success] Total time: 1 s, completed Sep 18, 2023, 3:09:43 AM
o$ 
```
# エラー対応
## ソースからBOMを削除する必要がある。ソースファイルは、UTF-8（BOM無し）で保存する必要がある。
```bash
Dockerfile:9
--------------------
   7 |
   8 |     # Scalaのコードをコンパイル
   9 | >>> RUN sbt compile
  10 |
  11 |     # コンパイルしたファイルを実行
--------------------
ERROR: failed to solve: process "/bin/sh -c sbt compile" did not complete successfully: exit code: 1
```
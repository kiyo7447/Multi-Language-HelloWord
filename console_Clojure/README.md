# プロジェクト作成
```powershell
docker build -t clojure-image .
docker run -it --rm -v ${PWD}:/usr/src/myapp -w /usr/src/myapp clojure-image bash
lein new app hello-world
```
## ローカルのディレクトリをマウントして実行する
```powershell
cd hello-world
# 実行コンテナを作成する
docker build -t clojure-image-runtime .
# 即実行する
docker run --rm clojure-image-runtime
```
# コメント
う～ん。なんかDockerの使い方がスマートではない。


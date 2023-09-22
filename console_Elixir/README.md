
# 実行する
```powershell
docker build -t elixir-image .

docker run --rm elixir-image 
```
# エラー
## ソースは、UTF-8 BOM付きではエラーになります。
BOMを外してソースを保存してください。


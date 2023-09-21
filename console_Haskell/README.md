# Console Haskell
## 実行
```powershell
docker build -t haskell-image .
docker run haskell-image
```
## ローカルのディレクトリをマウントして実行する
```powershell
docker run -it --rm -v ${PWD}:/usr/src/myapp -w /usr/src/myapp haskell-image runhaskell hello.hs
```


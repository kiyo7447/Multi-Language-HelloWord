# 実行方法
## Imageに実行スクリプトを入れる
```powershell
docker build -t perl-image .
docker run -it --rm perl-image
```
## ローカルのディレクトリをマウントして実行する
```powershell
docker run -it --rm -v ${PWD}:/usr/src/myapp -w /usr/src/myapp perl-image perl hello.pl
```



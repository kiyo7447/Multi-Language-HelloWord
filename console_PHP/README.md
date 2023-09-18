# Bashで実行
```bash
php hello.php
```
# Dockerで実行
```bash
docker build -t php-image .
docker run --rm --name hello-world-php php-image
```
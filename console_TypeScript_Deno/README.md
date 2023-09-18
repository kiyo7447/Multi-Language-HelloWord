# Operating System
## インストール方法
```
# Windows
choco install deno
# Linux
curl -fsSL https://deno.land/x/install/install.sh | sh
```
## 実行方法
```
# Windows
deno run --allow-net .\hello.ts
# Linux
/home/kiyo/.deno/bin/deno  run  --allow-net hello.ts
```
# Docker
## Build & Run Docker
```
docker build -t deno-image .
docker run --rm --name hello-world-deno deno-image
```
## Run Docker on 各種OS
```
# Linux
docker run -it --rm --name deno-container -v $(pwd):/app deno-image /bin/bash
# Windows PowerShell
docker run -it --rm --name deno-container -v ${PWD}:/app deno-image /bin/bash
# Windows Command Prompt
docker run -it --rm --name deno-container -v %cd%:/app deno-image /bin/bash

# run
deno run --allow-net hello.ts
```

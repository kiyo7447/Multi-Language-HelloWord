
# 実行方法
```
# Linux
## --interactive --tty
docker run --network host --interactive --name bun --tty --rm -v $(pwd):/app -w /app oven/bun bash
## run
docker run --network host --interactive --name bun --tty --rm -v $(pwd):/app -w /app oven/bun run hello.ts

# Windows PowerShell
##  --interactive --tty
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun bash
## -it
docker run --network host -it --name bun --rm -v ${PWD}:/app -w /app oven/bun bash
## run
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun run hello.ts
bun hello.ts

# Windows Command Prompt
## -it
docker run --network host --interactive --name bun --tty --rm -v %cd%:/app -w /app oven/bun bash
## run
docker run --network host --interactive --name bun --tty --rm -v %cd%:/app -w /app oven/bun run hello.ts
```

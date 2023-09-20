
# 実行方法
## Linux bash
```bash
## --interactive --tty
docker run --network host --interactive --name bun --tty --rm -v $(pwd):/app -w /app oven/bun bash
## run
docker run --network host --interactive --name bun --tty --rm -v $(pwd):/app -w /app oven/bun run hello.ts
```
## Windows PowerShell
```powershell
##  --interactive --tty
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun bash
bun hello.ts
## -it
docker run --network host -it --name bun --rm -v ${PWD}:/app -w /app oven/bun bash
bun hello.ts
## run
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun run hello.js
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun run hello.ts
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun run hello.jsx
docker run --network host --interactive --name bun --tty --rm -v ${PWD}:/app -w /app oven/bun run hello.tsx
```
## Windows Command Prompt
```cmd
## -it
docker run --network host --interactive --name bun --tty --rm -v %cd%:/app -w /app oven/bun bash
## run
docker run --network host --interactive --name bun --tty --rm -v %cd%:/app -w /app oven/bun run hello.ts
```

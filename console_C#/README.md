# C# Console
## プロジェクトの作成
```bash
dotnet new console -o Hello
```
## ビルド
```bash
cd Hello
dotnet build
```
## 実行
```bash
dotnet run
```
## 実行ファイルの作成
```bash
# Windows
dotnet publish -c Release -r win-x64 --self-contained true
# Linux
dotnet publish -c Release -r linux-x64 --self-contained true
# macOS
dotnet publish -c Release -r osx-x64 --self-contained true
```
## 実行ファイルの実行
```bash
cd bin/Release/net5.0/win-x64/publish
./Hello.exe
```




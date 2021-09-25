# nodejs web
## 実行方法
node server.js
## エラー
``` Bash
PS C:\dev\GitHub\kiyo7447\HelloWorld\HellowWorldWeb\nodejs> node .\server.js       
events.js:377
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::80
    at Server.setupListenHandle [as _listen2] (net.js:1320:16)
    at listenInCluster (net.js:1368:12)
    at Server.listen (net.js:1454:7)
    at Object.<anonymous> (C:\dev\GitHub\kiyo7447\HelloWorld\HellowWorldWeb\nodejs\server.js:9:2)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32)
    at Function.Module._load (internal/modules/cjs/loader.js:778:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1347:8)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  code: 'EADDRINUSE',
  errno: -4091,
  syscall: 'listen',
  address: '::',
  port: 80
}
# 問題はWindowsで使用していたWebサーバを止めて改善させた。
PS C:\dev\GitHub\kiyo7447\HelloWorld\HellowWorldWeb\nodejs> node .\server.js
Server http://localhost
```
## 不可解なこと
|環境|PORT=80|PORT=3000|
|:---|:---|:---|
|Windows|○|○|
|Ubuntu on WSL2|×|○|
どうしても、Ubuntuで80番ポートが使えなかった。


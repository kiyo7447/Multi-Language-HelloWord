// httpという名前のネイティブライブラリをインポートして、httpという変数につめる
const http = require('http'); 

// サーバセットアップ
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Content-Type指定
  res.end('Hello World!nodejs!');
})
//http 80は、Windowsだと動くけど、WSL2上のUbuntuだと動作しない。
//.listen(80, () => console.log('Server http://localhost')); // ポート80で起動
.listen(3000, () => console.log('Server http://localhost:3000')); // ポート3000で起動

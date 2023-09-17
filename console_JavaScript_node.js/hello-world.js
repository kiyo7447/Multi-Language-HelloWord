// コンソールから入力を受け取る
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ユーザーに質問を投げる
rl.question('あなたの名前は何ですか？ ', (name) => {
  // 入力された名前を出力する
  console.log(`こんにちは、${name}さん！`);

  // 入力をクローズする
  rl.close();
});

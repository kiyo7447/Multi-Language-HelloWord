# 実行方法
```
javac Hello.java
java Hello
```
```
java Hello.java
```


# エラー
## JavaファイルにBOMがあるとエラーになる。ソースの文字コードをShift-JISに変更する。
```
o$ javac Hello.java
Hello.java:1: エラー: この文字(0xEF)は、エンコーディングwindows-31jにマップできません
?ｻｿpublic class HelloWorld {
^
Hello.java:3: エラー: この文字(0x83)は、エンコーディングwindows-31jにマップできません
        // 繝｡繝?繧ｻ繝ｼ繧ｸ繧貞?ｺ蜉?
              ^
Hello.java:3: エラー: この文字(0x87)は、エンコーディングwindows-31jにマップできません
        // 繝｡繝?繧ｻ繝ｼ繧ｸ繧貞?ｺ蜉?
                       ^
Hello.java:3: エラー: この文字(0x9B)は、エンコーディングwindows-31jにマップできません
        // 繝｡繝?繧ｻ繝ｼ繧ｸ繧貞?ｺ蜉?

```

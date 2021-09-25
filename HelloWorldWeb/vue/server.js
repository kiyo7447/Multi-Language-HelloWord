var http = require("http");
var fs = require('fs');
//特定のフォルダの内容を返す
var server = http.createServer(function (req, res) {
    //var url = "wwwroot" + req.url;
    //↓デフォルトのページを返す
    var url = "wwwroot" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);

    if (fs.existsSync(url)) {
        fs.readFile(url, (err, data) => {
            if (!err) {
                //res.writeHead(200, {"Content-Type": "text/html"});
                //↓拡張子によってContentTypeを返します。
                res.writeHead(200, { "Content-Type": getType(url) });
                res.end(data);
            }
        });
    }
});
var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
function getType(_url) {
    var types = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".gif": "image/gif",
        ".svg": "svg+xml"
    }
    for (var key in types) {
        if (_url.endsWith(key)) {
            return types[key];
        }
    }
    return "text/plain";
}

/*
//Ver 1:文字を返す
var http = require("http");

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello, Node.js world!");
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
*/

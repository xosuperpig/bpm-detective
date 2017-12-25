const fs = require('fs');
const url = require('url');

let handler = function (req, res) {
    console.log(req.url)
    let uri = url.parse(req.url);
    console.log('server', 'fetch mp3', uri.pathname);
    fs.createReadStream(__dirname + '/media' + decodeURIComponent(uri.pathname)).pipe(res);
};

module.exports = handler;
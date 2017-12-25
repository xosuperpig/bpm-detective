const test = require('tape');
const supertest = require('supertest');

test('mp3server', async t=> {
    let mp3server = require('./mp3server');
    let res = await new Promise((resolve, reject) => {
        supertest(mp3server)
            .get('/Anevo,Kayla Diamond - Feel Something.mp3')
            .end(function (err, res) {
                err ? reject(err) : resolve(res);
            })
    });
    t.end();
});
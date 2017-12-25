console.log('start fetch')
fetch('http://localhost:8000/' + encodeURIComponent('Anevo,Kayla Diamond - Feel Something.mp3'))
    .then(function(res) {
        console.log('fetch end');
        window.close();
        return res.blob();
    })
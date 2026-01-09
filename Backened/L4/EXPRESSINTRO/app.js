const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/getdata', (req, res) => {
    console.log(req.query);
    res.send('ok');
});


let movies = [
    { name: 'movie1', year: 2001 },
    { name: 'movie2', year: 2002 },
    { name: 'movie3', year: 2003 },
];

app.get('/getmovie', (req, res) => {
    res.json(movies);
});

app.get('/temp', (req, res) => {
    res.send('<h1>This is tmp routes</h1>');
});

const path = require('path');
const loc = path.join(__dirname, 'index.html');
app.get('/file', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(loc);
})

app.listen(4000, () => {
    console.log('server run on port 4000');
});

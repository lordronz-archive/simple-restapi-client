const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json'));

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.method);
    res.json(data);
});

app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
    fs.writeFileSync('./data.json', JSON.stringify(data));
});

app.get('/:username', (req, res) => {
    const a = data.filter(function(d) {
        return d.username === req.params.username;
    });
    const b = [];
    for(let i = 0; i < data.length; ++i) {
        if(data[i].username === req.params.username) {
            b.push(data[i]);
        }
    }
    res.json(b);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

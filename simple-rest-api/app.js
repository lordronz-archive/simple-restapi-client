const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// read data.json
const data = JSON.parse(fs.readFileSync('./data.json'));

//middleware
app.use(express.json());


// get method
app.get('/', (req, res) => {
    console.log(req.method);
    res.json(data);
});

// post method
app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
    fs.writeFileSync('./data.json', JSON.stringify(data));
});


// get method with username
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

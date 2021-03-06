const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRouter = require('./routers/user');
const surveyRouter = require('./routers/surveys');
const morgan = require('morgan');

// read data.json
// const data = JSON.parse(fs.readFileSync('./data.json'));

mongoose.connect('mongodb://localhost:27017/simplerestapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).catch(e => {
    console.log(e);
});

//middleware
app.use(express.json());
app.use(morgan('combined'));

// // get method
// app.get('/', (req, res) => {
//     console.log(req.method);
//     res.json(data);
// });
// // post method
// app.post('/', (req, res) => {
//     data.push(req.body);
//     res.json(data);
//     fs.writeFileSync('./data.json', JSON.stringify(data));
// });

// // get method with username

// app.get('/:username', (req, res, next) => {
//     console.log(req.params.username);
//     next();
// }, (req, res, next) => {
//     next('route');
// }, (req, res, next) => {
//     res.json({message: 'Last'});
// });

// app.get('/:username', (req, res, next) => {
//     console.log(`${req.params.username} kedua`);
//     next();
// });

// app.get('/:username', (req, res) => {
//     const a = data.filter(function(d) {
//         return d.username === req.params.username;
//     });
//     // const b = [];
//     // for(let i = 0; i < data.length; ++i) {
//     //     if(data[i].username === req.params.username) {
//     //         b.push(data[i]);
//     //     }
//     // }
//     res.json(a);
// });

app.use('/user', userRouter);
app.use('/survey', surveyRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const axios = require('axios');

// axios
//     .post('http://localhost:3000', {
//         username: 'yonpo',
//         age: 66,
//         languages: ['Python', 'Elixir', 'Typescript'],
//     })
//     .then((res) => {
//         console.log(res.data);
//     });
//
// async function getResponse() {
//     const res = await axios.get('http://localhost:3000/jsjsj/qpqpq');
//     console.log(res.data);
//     console.log('11');
// }


axios.get('http://localhost:3000/ponyo').then((res) => {
    console.log(res.data);
});

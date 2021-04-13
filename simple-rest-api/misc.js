const a = {
    b: '8',
    a: 9,
    c : [1, 2, 3],
    d: {
        a: 1,
    },
    e: null,
    f: undefined,
    g: function() {
        return 'haha';
    },
    h: () => {
        console.log(5);
    },
};

console.log(a.h());

// const prom = () => {
//     return new Promise((resolve, reject)=>{
//         resolve(69);
//     })
// }

// (async () => {
//     console.log(await prom());
// })();

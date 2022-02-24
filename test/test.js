const p = new Promise((resovle,reject) => {
    setTimeout(() => {
        let x=2;
        let y=1;
        if(x != 0) {
        resovle(y/x);
        }else {
        reject(new Error("message 1"));
        }
    },2000);
});

p
    .then(result => console.log("Result", result))
    .catch(err => console.log("Error", err.message))
    .finally(() => { 
        const p2 = new Promise((resovle,reject) => {
        setTimeout(() => {
            let x=0;
            let y=1;
            if(x != 0) {
            resovle(y/x);
            }else {
            reject(new Error("message 2"));
            }
        },1000);
        })
        p2
        .then(result => console.log("Result", result))
        .catch(err => console.log("Error", err.message));
    });


function test(){
    return new Promise((resovle,reject) => {

    })
}
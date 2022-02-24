function start() {
    return performance.now();
};

function timeElapsed(startTime) {
    return (performance.now() - startTime) / 1000;
};

function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("J");
        },1000);
    });
};

function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("JO");
        },2000);
    });
};

function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("JOK");
        },3000);
    });
};

async function run() {
    const startTime = start();
    
    const fst = await first();
    console.log(fst);
    const sec = await second();
    console.log(sec);
    const trd = await third();
    console.log(trd);

    console.log((start() - startTime) / 1000);
};

run();
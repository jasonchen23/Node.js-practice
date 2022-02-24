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
    // 已開始處理
    const fst = first();
    const sec = second();
    const trd = third();
    // Promise { <pending> }，因為無相依性所以在console.log時會印出此結果。
    console.log(fst);
    console.log(sec);
    console.log(trd);
    console.log("\n");
    //與index.js相比，非同步處理事件都是獨立事件
    // Promise.race是誰最快執行完就用誰
    // 當事件有相關時用index.js，若為獨立事件則用index-2.js
    // 如果只需要最快的事件執行，可用Promise.race
    const rets = await Promise.race([fst,sec,trd]);

    console.log(rets);
    console.log('time elapsed:', start());
};

run();
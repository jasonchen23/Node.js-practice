const like = require('./module/like');
const timer = require('./module/timer');


async function run() {
    const startTime = timer.start();
    
    const rets = await Promise.all([
        like.first(),
        like.second(),
        like.third(),
    ]);

    console.log(rets);

    console.log("time elapsed:", timer.timeElapsed(startTime));
};

run();
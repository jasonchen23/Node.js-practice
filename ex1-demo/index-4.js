const Timer = require('./module/timer+');
const like = require('./module/like+');

async function run() {
    try {
        const timer = new Timer();
    
        const rets = await Promise.all([
            like(1),
            like(2),
            like(3),
            like(-2),
        ]);
        // const x = await like(1);
        // console.log(x);
        // const y = await like(2);
        // console.log(y);
        // const z = await like(3);
        // console.log(z);
        // const w = await like(0);
        // console.log(w);
    
        console.log(rets);
        console.log('time elapsed: ' + timer.count());
    }
    catch(e) {
        console.log('Error:' + e.message);
    }
};

run();
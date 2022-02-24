function start() {
    return performance.now();
};

function timeElapsed(startTime) {
    return (performance.now() - startTime) / 1000;
};

module.exports = { start, timeElapsed };
module.exports = class Timer{
    constructor() { //建構時會運行的指令;當我new Timer時會初始化的指令
        console.log("hello world")
        this.startT = performance.now();
        // console.log(this.startT/1000);
    };
    count() {
        return (performance.now() - this.startT) / 1000;
    };
};
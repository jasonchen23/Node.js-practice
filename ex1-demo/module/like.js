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

module.exports = { 
    first, 
    second, 
    third, 
    };
function thumbUp(num) {
    return new Promise((resolve, reject) => {
        if(num <= 0) {
            reject(new Error("Positive num required"));
        };
        setTimeout(() => {
            let thumb = '';
            for (let i = 0; i < num; i++) {
                thumb += 'H';
                };
            resolve(thumb);
        }, num * 1000);
    });
};

module.exports = thumbUp;
console.log('Before');

getUser(1, (user) => {
    console.log('User',user);
});
getUser2(1, function(user) {
    console.log('User',user);
});
// console.log(user);
console.log('After');


function getUser(id,callback) {
    setTimeout(() => {
        console.log("reading a user from a database...");
        callback({ id: id, gitHubUsername: 'mosh'});
    }, 10000);
}
function getUser2(id,callback) {
    setTimeout(() => {
        console.log("reading a user from a database...");
        callback({ id: id, gitHubUsername: 'josh'});
    }, 0);
}

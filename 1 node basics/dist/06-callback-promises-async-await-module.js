import { resolve } from "node:dns";
const users = [
    { id: 1, name: 'A', role: 'user' },
    { id: 2, name: 'B', role: 'user' },
    { id: 3, name: 'C', role: 'super-admin' },
];
//callback function
//callback(error,result) -> classic callback pattern
function findUserWithCallback(userId, callback) {
    setTimeout(() => {
        const user = users.find((user) => user.id === userId);
        if (!user) {
            callback(new Error("user not found"));
            return;
        }
        else {
            callback(null, user);
        }
    }, 500);
}
findUserWithCallback(1, (err, user) => {
    if (err) {
        console.log(err.message);
        return;
    }
    else {
        console.log(user);
    }
});
// promises
function fetchUserWithPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === userId);
            if (!user) {
                reject(new Error("user not found"));
                return;
            }
            else {
                resolve(user);
            }
        }, 1000);
    });
}
fetchUserWithPromise(4).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error.message);
});
async function findUserWithAsyncAwait(userId) {
    try {
        const user = await fetchUserWithPromise(userId);
        return user;
    }
    catch (error) {
        throw error;
    }
}
findUserWithAsyncAwait(3).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error.message);
});
//# sourceMappingURL=06-callback-promises-async-await-module.js.map
const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

//console.log(module);
//export default {
module.exports = {
    //send: send,
    REQUEST_TIMEOUT,
    send,
};

console.log('Hello from request.js');
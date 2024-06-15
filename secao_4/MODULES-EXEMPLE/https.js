//const { send } = require("./request");
//import request from './internals/request.mjs';
//const response = require('./response.js');
//import response from './internals/response.mjs';

//const internals = require('./internals')
const {send, read } = require('./internals');

function makeRequest(url, data) {
    //internals.request.send(url, data);
    //internals.send(url, data);
    send(url, data);
    //return internals.response.read();
    //return internals.read();
    return read();
}

//require('https://google.com', 'hello');

const response_Data = makeRequest('https://google.com', 'hello');
console.log(response_Data);

//console.log(require.cache);


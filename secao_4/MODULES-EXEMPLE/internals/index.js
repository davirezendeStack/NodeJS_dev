//const { request } = require("http");

const request = require('./request');
const response = require('./response');

module.exports = {
    ...require('./request'),
    ...require('./response'),
}

/*
module.exports = {
    //request: require('./request'),
    send: request.send,
    //response: require('./response'),
    REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
    read: response.read,
}*/
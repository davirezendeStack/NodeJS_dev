//const http = require('node:http');
const http = require('http');

/*
const postData = JSON.stringify({
  'msg': 'Hello World!',
});*/

/*
const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};*/


const req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data! Finish request!');
    });
});




//const req = http.request(options, (res) => {
/*const req = http.request("http://www.google.com", (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  //res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});*/

// Write data to request body
//req.write(postData);
req.end();







/*const http = require("http");

const test = null;

const req = http.request('http://www.google.com', (res) => {
    test = res;
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

req.end;
*/
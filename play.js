const net = require('net');
// const { stderr, stdin } = require('process');
const connect = require('./client');
const setupInput = require("./input");


console.log("Connecting..");
// connect();

setupInput(connect());

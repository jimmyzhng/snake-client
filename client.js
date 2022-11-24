const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {

  // createConnect is used to create an object named conn
  // Represents the connection you have with server
  // conn object full of useful methods/ properties that can be used
  // to interact with the server

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log('Successfully connected to game server.');
    conn.write("Name: POO");
  });

  // });


  // Event handler: code that edfines what to do when an event occurs
  // .on method lets you specify event name and function that does something when event happens

  return conn;
};

module.exports = connect; 
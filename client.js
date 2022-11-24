const net = require('net');

// establishes a connection with the game server
const connect = function() {
  // createConnect is used to create an object named conn
  // Represents the connection you have with server
  // conn object full of useful methods/ properties that can be used
  // to interact with the server

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  const connectData = conn.on("connect", (data) => {
    console.log(data);
  });

  // Event handler: code that edfines what to do when an event occurs
  // .on method lets you specify event name and function that does something when event happens

  return conn;
};

module.exports = connect; 
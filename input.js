// stores the active TCP connection object
let connection;


// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // This runs handleUserInput when input is received from keyboard
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === "e") {
    connection.write("Say: does this work lol");
  }

  if (key === "f") {
    connection.write("Say: peepee");
  }

  if (key === "g") {
    connection.write("Say: poopoo");
  }

};

module.exports = setupInput;
// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key){
  // console.log(key)
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up')
  } else if (key === 'a') {
    connection.write('Move: left')
  } else if (key === 's') {
    connection.write('Move: down')
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (key === 'j') {
    connection.write('Say: Wuz')
  } else if (key === 'k') {
    connection.write('Say: Up')
  }
};

 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data)
  });

  return stdin;
}

module.exports = { setupInput }
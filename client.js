/**
 * Establishes connection with the game server
 */
const net = require('net');
const { IP, PORT } = require('./constants'); //added
// console.log(IP)
const connect = function() {
  const conn = net.createConnection({ 
    
    host: IP,
    port: PORT
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect',() => {
    console.log('Successfully connected to game server!');
    conn.write("Name: CP");
  });
  
  conn.on('data', (data) => {
    console.log('Snake says: ', data);
  });

  return conn;
}

module.exports = { connect };
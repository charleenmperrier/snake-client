/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect',() => {
    console.log('Successfully connected to game server!');
    conn.write("Name: CP");
  });
  // conn.on('connect',() => {
    
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   },500);

  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   },1000);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   },2000);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   },3000);
    
  // });
  conn.on('data', (data) => {
    console.log('Snake says: ', data);
  });

  return conn;
}

module.exports = { connect };
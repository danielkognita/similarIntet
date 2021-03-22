
async function connect () {
  if (global.connection && global.connection.state !== 'disconnected') { return global.connection }

  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection('mysql://daniel:D[Ek!$3VeJ2d6g43@prod-db.c0j6c3g7natt.us-east-2.rds.amazonaws.com:3306/gsik')
  global.connection = connection
  return connection
}

async function selectBots () {
  const conn = await connect()
  const [rows] = await conn.query('SELECT * FROM bots')
  return rows
}

module.exports = { selectBots }

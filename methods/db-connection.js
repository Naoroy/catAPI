const mysql = require('mysql')

// const db_connection = mysql.createConnection({
//   host: 'localhost',
//   database: 'catmash',
//   user: 'cat',
//   password: ''
// })
const db_connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-01.cleardb.net',
  database: 'heroku_43c8e1c3b41665f',
  user: 'bacf05b4c11ff7',
  password: '50dc6ad9'
})

module.exports = db_connection

const mysql = require('mysql')

// const db_connection = mysql.createConnection({
//   host: 'localhost',
//   database: 'catmash',
//   user: 'cat',
//   password: ''
// })
const db_connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-01.cleardb.net',
  database: 'heroku_d269b7a3680ce53',
  user: 'be17d660a03bf7',
  password: '8ba255e3'
})

module.exports = db_connection

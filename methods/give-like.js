const mysql = require('mysql')
const credentials = require ('./db-connection')

const giveLike = (id, callback) => {
  const query = `UPDATE cat
    SET total_likes= total_likes + 1
    WHERE id="${id}"`
  const dbConnection = mysql.createConnection(credentials)

  dbConnection.query(query, (error, result) => {
    if (error) throw error
    
    callback('done')
  })
  dbConnection.end()
}

module.exports = giveLike

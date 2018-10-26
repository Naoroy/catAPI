const mysql = require('mysql')
const credentials = require ('./db-connection')

const getUrls = (callback) => {
  const query = 'SELECT * FROM cat'
  const dbConnection = mysql.createConnection(credentials)

  dbConnection.query(query, (error, result) => {
    if (error) throw error
    callback(result)
  })
  dbConnection.end()

}

module.exports = getUrls

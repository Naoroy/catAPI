const request = require('request')
const mysql = require('mysql')
// const dbConnection = require('./db-connection')
const credentials = require ('./db-connection')
const updateDB = (callback) => {

  request.get({ url: 'https://latelier.co/data/cats.json' },
    (error, response, body) => {
      const dbConnection = mysql.createConnection(credentials)
      const images = JSON.parse(body).images

      if (error) throw error
      images.forEach((image, i) => {
        let name = ''
        const query = `INSERT INTO cat (id, name, url) values (
          "${image.id}",
          "${name}",
          "${image.url}"
        )`

        dbConnection.query(query, (error) => {
          if (error) throw error
          if (i == images.length-1) {
            console.log('updated db')
            dbConnection.end()
            return callback()
          }
        })
      })
    })
}

module.exports = updateDB

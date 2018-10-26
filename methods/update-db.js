const request = require('request')
const dbConnection = require('./db-connection')

const updateDB = (callback) => {

  request.get({ url: 'https://latelier.co/data/cats.json' },
    (error, response, body) => {
      const images = JSON.parse(body).images

      images.forEach((image) => {
        let name = ''
        const query = `INSERT INTO cat (id, name, url) values (
          "${image.id}",
          "${name}",
          "${image.url}"
        )`
        dbConnection.query(query, (error) => {
          if (error) throw error

        })
      })
      console.log('updated db')
      callback()
    })
}

module.exports = updateDB

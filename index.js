/* eslint-disable no-console */

const express = require('express')
const updateDB = require('./methods/update-db')
const getUrls = require('./methods/get-urls')
const giveLike = require('./methods/give-like')

const PORT = process.env.PORT || 4000

express()
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  .use(express.json())
  .get('/', (req, res ) => {
    getUrls((data) => {
      if (!data.length) return updateDB(() => {
        getUrls((data) => {
          res.send(data)
          // res.end()
        })
      })
      res.send(data)
      res.end()
    })
  })
  .get('/like', (req, res) => {
    const id = req.query.id ? req.query.id : null

    if (id) {
      giveLike(id, (result) => {
        res.write(result)
        res.end()
      })
    } else { res.end() }

  })
  .listen(PORT).on('error', (error) => { console.log(error) })

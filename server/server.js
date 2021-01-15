const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'src')))

app.listen(process.env.PORT || 5000, () => {
    console.log(`listening on port: ${PORT}`)
  })
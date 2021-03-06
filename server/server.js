const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')
const app = express()

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
//       if (err) {
//         console.log(err);
//       }
//     })
//   })


app.use(express.static("build"))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

app.listen(process.env.PORT || 5000, () => {
    console.log(`listening on port: ${PORT}`)
  })
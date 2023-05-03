const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors');
const chefs = require('./data/chefs.json')



app.use(cors())


app.get('/', (req, res) => {
  res.send('Cooking master is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
  })

app.listen(port, () => {
  console.log(`Cooking master is running on ${port}`)
})
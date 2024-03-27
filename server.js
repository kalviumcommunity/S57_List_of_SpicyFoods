const express = require('express')
const app = express()

//routes
app.get('/ping', (req, res) => {
    res.send('pong')
  });

  app.get('/', (req, res) => {
    res.send('Hello World to the api!')
  })


app.listen(3000,()=>{
    console.log('Node API is running on port 3000 ')
})


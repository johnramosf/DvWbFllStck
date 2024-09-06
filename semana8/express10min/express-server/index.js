const express = require('express');

const app = express()
const port = 8000 

app.get('/',(req, res) => {
    res.send('Hola soy la raiz')
}) 

app.get('/hola',(req, res) => {
    res.send('Hola')
})


app.get('/adios',(req, res) => {
    const query = req.query;
    res.send(`Adios!  ${query.nombre}`)
})

app.listen(port,()=>{
  console.log('Server is running at http://localhost:'+port)
})


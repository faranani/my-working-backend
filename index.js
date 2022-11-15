const express = require('express')
const bodyParser = require('body-parser')
const { application } = require('express')
const app = express()
const port = 3000
const db= require('./queries')
// const { Pool } = require('pg');
// const { response } = require('express');

//         Pool.connect((err, client, release) => {
//             if (err) {
//             return console.error('Error acquiring client', err.stack)
//             }
//             client.query('SELECT NOW()', (err, result) => {
//             release()
        
//             if (err) {
//                 return console.error(
//                 'Error executing query', err.stack)
//             }
//             console.log("Connected to Database !")
//             })
//         })



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true,
}))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })



  


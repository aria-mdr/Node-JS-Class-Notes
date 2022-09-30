// bring express code
const express = require('express');
const teachers = require('./teacher'); // default import
const { students } = require('./students'); // named import

// call express function to create an express app object
const app = express();

// decide on a port
const port = 3000;

app.use(express.static('public'))

// route => http://localhost:3000/homeJs, method => GET
app.get('/homeJs', (req, res) => {
    res.sendFile(__dirname + '/client/index.js')
})

// route => http://localhost:3000/, method => GET
app.get('/', (req, res) => {
    console.log('some body hit get /')
    res.sendFile(__dirname + '/client/index.html')
})

app.get('/teachers', (req, res) => {
    res.json(teachers)
})

app.get('/students', (req, res) => {
    res.json(students)
})


// always the last, as express checks in order that routes are provided. 
// if it doesnt find anything, * mathces everything
app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(port, () => {
    console.log('Express server listening on port', port);
})
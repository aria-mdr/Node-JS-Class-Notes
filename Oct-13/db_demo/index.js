const path = require('path')
const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const {getUsers, getUserById, createNewUser, updateUser, deleteUser} 
= require('./controllers/user.controller')
const {User} = require('./db/models/User.model')


const port =  3003;

//CRUD operations get,post, patch, delete
app.use(express.static(path.join(__dirname, './client/public')))

 //const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.fdmtn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect('mongodb+srv://inas:12345@cluster0.avalkns.mongodb.net/Bookstore?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(err));

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    console.log('accessing route /login, METHOD = GET');
    res.sendFile(path.join(__dirname, '/client/login.html'));
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/register.html'));
})

app.get('/api/users', getUsers)
app.get('/api/user/:id',getUserById)
app.post('/api/users/register',createNewUser)
app.patch('/api/user/:id',updateUser)
app.delete('/api/user/:id', deleteUser)

app.listen(port, () => {
    console.log(`Listening on port ${port}....`)
})
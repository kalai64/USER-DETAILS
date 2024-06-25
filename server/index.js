const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usermodel = require('./model/user')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://kalai6464:kalai6464@cluster0.suros08.mongodb.net/crud')
    .then(() => console.log(`Mongoose Connected`))
    .catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send(`<h1>Server is live</h1>`)
})

app.post('/create', (req, res) => {
    usermodel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/users', (req, res) => {
    usermodel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/getuser/:id', (req, res) => {
    const id = req.params.id
    usermodel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req, res) => {
    const id = req.params.id
    usermodel.findByIdAndUpdate(id, { name: req.body.name, age: req.body.age, email: req.body.email }, { new: true })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id
    usermodel.findByIdAndDelete(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.listen(8000, () => console.log(`Port is running on 8000`))

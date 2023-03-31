const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2001

const path = require('path')

require('dotenv').config({ path:"./config/.env"})

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', function(req,res){
    res.render("index.ejs");
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})
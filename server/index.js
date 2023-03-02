const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newdb"
})

con.connect(function(err){
    if(err) console.log(err)
    console.log("Conected!")
})

const port = 3000
app.get("/",function(req,res){
    res.send("pozdro")
})


app.listen(port)
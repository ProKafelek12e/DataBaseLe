const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const mysql = require('mysql')

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

app.get("/select",function(req,res){
    const sql = "SELECT * FROM tabela1"
        con.query(sql,function(err,result,fields){
            if(err) console.log(err)
            res.send(result)
            console.log(fields)
        })
})

app.get("/add/:imie/:nazwisko/:klasa",function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa
    const sql = `INSERT INTO tabela1 (Imie, Nazwisko, Klasa) VALUES ('${imie}','${nazwisko}','${klasa}')`
    con.query(sql,function(err,result,fields){
        if(err){
            console.log(err)
            res.send("Nie dodano")
        }
        else res.send("dodano")
    })
})

app.listen(port)
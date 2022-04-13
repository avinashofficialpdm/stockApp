const express = require('express')
const db =require ('./db')
const app = express()

const req = require('express/lib/request')

const dataService=require('./dataService')

app.use(express.json())

app.get('/search/:stockName',(req,res)=>{
    dataService.search(req.params.stockName)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.get("/searchStock/:name",function(req,res){
    var regex = new RegExp(req.params.name,'i');
    db.stock.find({Name:regex}).then((result)=>{
        res.status(200).json(result)
    })
})

app.listen(3000, () => {
    console.log("server started at port no:3000")
})



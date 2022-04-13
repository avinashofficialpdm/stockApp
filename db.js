
// To give Mongo  db connection details

//mongoose import
const mongoose = require('mongoose')

//state connection string
mongoose.connect('mongodb://localhost:27017/stocks', {
    useNewUrlParser: true
})

//model creation
const stock = mongoose.model('stock', {
    
    S:Object,
    Name:String,
    CurrentMarketPrice:String,
    MarketCap:String,
    StockPE:String,
    DividendYield: String,
    ROCE:String,
    ROEPreviousAnnum: String,
    DebttoEquity:String,
    EPS:String,
    Reserves:String,
    Debt:String
})

//export model - User
module.exports = {
    stock
}
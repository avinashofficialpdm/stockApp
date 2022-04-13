const db = require('./db')

const search = (stockName) => {
    console.log(stockName);
    return db.stock.find({ Name: stockName })
        .then(stock => {
            if (stock) {
                return {
                    statusCode: 200,
                    status: true,
                    message: "Success",
                    stock
                }
            }
        })
}



module.exports = {
    search
}
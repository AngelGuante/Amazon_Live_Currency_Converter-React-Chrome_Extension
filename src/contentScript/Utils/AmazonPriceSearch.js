const dop_uds = require('./GoogleFinanceScrapping')

const AmazonPricesSearch = () => {
    const pricesArray = document.getElementsByClassName('a-price')
    Array.prototype.forEach.call(pricesArray, (x) => {
        x.textContent = '69'
    })
}

module.exports = AmazonPricesSearch
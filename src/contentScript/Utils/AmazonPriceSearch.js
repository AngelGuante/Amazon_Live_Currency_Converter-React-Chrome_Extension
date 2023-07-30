const { Get } = require('./Request')
const { DOPeso } = require('./currencyNumberFormat')

const AmazonPricesSearch = async () => {
    const result = await Get('https://amazon-live-currency-converter-react.onrender.com/Currency?currency1=usd&currency2=dop')
    value = result['currency-amount']

    const pricesArray = document.getElementsByClassName('a-price-whole')
    Array.prototype.forEach.call(pricesArray, (x) => {
        const element = document.createElement('span')
        const valueRounded = Math.round(((value * x.textContent) + Number.EPSILON) * 100) / 100
        element.textContent = DOPeso(valueRounded)
        element.style.display = 'none'
        x.insertAdjacentElement('afterend', element)

        x.addEventListener('mouseover', () => {
            element.style.display = 'block'
        })
        x.addEventListener('mouseout', () => {
            element.style.display = 'none'
        })
    })
}

module.exports = AmazonPricesSearch
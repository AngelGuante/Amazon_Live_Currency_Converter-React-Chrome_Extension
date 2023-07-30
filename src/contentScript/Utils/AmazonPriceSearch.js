const { Get } = require('./Request')
const { DOPeso } = require('./currencyNumberFormat')

const AmazonPricesSearch = async () => {
    const result = await Get('https://amazon-live-currency-converter-react.onrender.com/Currency?currency1=usd&currency2=dop')
    value = result['currency-amount']

    const pricesArray = document.getElementsByClassName('a-price-whole')
    Array.prototype.forEach.call(pricesArray, (x) => {
        
        const valueRounded = Math.round(((value * x.textContent) + Number.EPSILON) * 100) / 100
        const div = document.createElement('div');

        x.addEventListener('mouseenter', () => {
            div.innerHTML = `${DOPeso(valueRounded)}`
            div.style.position = 'absolute'
            div.style.display = 'inline-block'
            div.style.backgroundColor = '#232F3E'
            div.style.color = 'white'
            div.style.top = '10px'
            div.style.left = '10px'
            div.style.padding = "4px 4px"
            div.style.zIndex = 100

            document.body.appendChild(div);
        });

        x.addEventListener('mousemove', (event) => {              
            div.style.left = event.clientX + 'px'
            div.style.top = window.scrollY + event.clientY + 'px'
        });

        x.addEventListener('mouseout', () => {
            div.style.display = 'none'
        })
    })
}

module.exports = AmazonPricesSearch
const DOPeso = value => {
    const format = new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP'
    })
    return format.format(value)
}

module.exports = {
    DOPeso
}
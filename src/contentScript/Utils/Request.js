const Get = async url => {
    // return {
    //     'currency-amount': 55
    // }
    const request = await fetch(url)
    return json = await request.json()
}

module.exports = {
    Get
}
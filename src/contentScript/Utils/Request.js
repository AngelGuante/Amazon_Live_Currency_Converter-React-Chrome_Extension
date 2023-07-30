const Get = async url => {
    const request = await fetch(url)
    return json = await request.json()
}

module.exports = {
    Get
}
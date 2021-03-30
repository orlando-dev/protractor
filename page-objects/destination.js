const DestinationComponenet = require('./components/destination')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAnd')

class Destination {
    constructor() {
        this.self = new DestinationComponenet()
    }
    visit(){
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`)
    }
}

module.exports = Destination
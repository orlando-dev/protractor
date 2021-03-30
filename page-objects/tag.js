const DestinationsComponenet = require('./components/destinations')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAnd')

class Tag {
    constructor() {
        this.destinations = new DestinationsComponenet()
    }
    visit(){
        browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
    }
}

module.exports = Tag
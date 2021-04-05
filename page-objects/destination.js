const DestinationComponenet = require('./components/destination')
const HeaderComponent = require('./components/header')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAnd')

class Destination {
  constructor () {
    this.self = new DestinationComponenet()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`)
  }
}

module.exports = Destination

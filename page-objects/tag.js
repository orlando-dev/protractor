const DestinationsComponenet = require('./components/destinations')
const HeaderComponent = require('./components/header')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAnd')

class Tag {
  constructor () {
    this.destinations = new DestinationsComponenet()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag

const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAnd')

class EditDestination {
    constructor() {
        this.self = new DestinationComponent()
        this.form = new FormComponent()
    }

    visit(){
        browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
    }
}

module.exports = EditDestination
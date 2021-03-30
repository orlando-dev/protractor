const TagsComponent = require('./components/tags')

class Home{
    constructor() {
        this.tags = new TagsComponent()
    }
    visit(){
        browser.get('/')
        browser.driver.manage().window().maximize();
    }
}

module.exports = Home
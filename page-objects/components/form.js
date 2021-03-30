class Form{
    constructor() {
        this.self = element(by.css('.destination form'))
        this.nameLabel = this.self.element(by.css('label[for="destination_name"]'))
        this.nameInput = this.self.element(by.id('destination_name'))
        this.descriptionLabel = this.self.element(by.css('label[for="destination_description"]'))
        this.descriptionInput = this.self.element(by.id('destination_description'))
        this.updateButton = this.self.element(by.css('input[type="submit"]'))

    }
}
module.exports = Form;
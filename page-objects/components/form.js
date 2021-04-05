const helper = require('protractor-helper')

class Form {
  constructor () {
    this.self = element(by.css('.destination form'))
    this.nameLabel = this.self.element(by.css('label[for="destination_name"]'))
    this.nameInput = this.self.element(by.id('destination_name'))
    this.nameInputWithError = this.self.element(by.css('.field_with_errors #destination_name'))
    this.descriptionLabel = this.self.element(by.css('label[for="destination_description"]'))
    this.descriptionInput = this.self.element(by.id('destination_description'))
    this.descriptionInputWithError = this.self.element(by.css('.field_with_errors #destination_description'))
    this.updateButton = this.self.element(by.css('input[type="submit"]'))
  }

  submitFormAfterClearingAndFillingItWith (name, description) {
    helper.clearFieldAndFillItWithText(this.nameInput, name)
    helper.clearFieldAndFillItWithText(this.descriptionInput, description)
    helper.click(this.updateButton)
  }
}
module.exports = Form

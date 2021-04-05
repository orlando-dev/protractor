class Destination {
  constructor () {
    this.self = element(by.className('destination'))
    this.image = this.self.element(by.css('img'))
    this.heading = this.self.element(by.css('h2'))
    this.paragraph = this.self.element(by.css('p'))
    this.anchor = this.self.element(by.css('a'))
  }
}

module.exports = Destination

class Destinations {
  constructor () {
    this.cards = element.all(by.css('.tag .cards .card'))
    this.firstCard = this.cards.first()
    this.imageOfFirstCard = this.firstCard.element(by.css('img'))
    this.headingOfFirstCard = this.firstCard.element(by.css('h2'))
    this.paragraphOfFirstCard = this.firstCard.element(by.css('p'))
    this.anchorOfFirstCard = this.firstCard.element(by.css('a'))
  }
}

module.exports = Destinations

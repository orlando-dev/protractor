const helper = require('protractor-helper')

const Tag = require('../page-objects/tag')

describe('Given I\'m at a radom tag page', () => {
    let tag

    beforeAll(() => {
        tag = new Tag()
        tag.visit()
    })

    describe('And there are three destinations for this tag in the database', () => {
        it('Then they all render as cards', () => {
            helper.waitForElementVisibility(tag.destinations.cards.last())

            expect(tag.destinations.cards.count()).toBe(3)
        })

        describe('When I look to the first card in isolation', () => {
            it('Then I see an image, a heading, and an anchor', () => {
                helper.waitForElementVisibility(tag.destinations.imageOfFirstCard)
                helper.waitForElementVisibility(tag.destinations.headingOfFirstCard)
                helper.waitForElementVisibility(tag.destinations.paragraphOfFirstCard)
                helper.waitForElementVisibility(tag.destinations.anchorOfFirstCard)
            })
        }) 
    })
})
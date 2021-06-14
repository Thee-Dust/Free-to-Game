
describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptGames()
    cy.visit('/')
  })

  it('Should be able to see game cards', () => {
    cy.get('.card-section').children().should('have.length', 18)
  })


  it('Should have 4Story as first game', () => {
    cy.get('.card-section')
    .get('.card')
    .eq(0)
    .find('img')
    .should('have.attr', 'src', 'https://www.freetogame.com/g/306/thumbnail.jpg')
    .get('.card-title')
    .eq(0)
    .contains('4Story')
    .get('.card-genre')
    .eq(0)
    .contains('MMORPG')
  })

  it('Should have Ace Online as 6th card', () => {
    cy.get('.home')
    .get('.card-section')
    .get('.card')
    .eq(5)
    .find('img')
    .should('have.attr', 'src', 'https://www.freetogame.com/g/319/thumbnail.jpg')
    .get('.card-title')
    .eq(5)
    .contains('Ace Online')
    .get('.card-genre')
    .eq(5)
    .contains('Shooter')
  })

  it('Should show Navbar', () => {
    cy.get('header')
    .get('a')
    .get('h1')
    .contains('Free 2 Game')
    .get('.user-display')
    .contains('UserName')
  })
})
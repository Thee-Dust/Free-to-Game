
describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptGames()
    cy.visit('http://localhost:3000')
  })

  it('Should be able to see game cards', () => {
    cy.get('card-section').children().should('have.length', 18)
  })

  it('Should have 4Story as first game', () => {
    cy.get('.card-display')
    .get('.card')
    .eq(0)
    .contains('4Story')
    .find('img')
    .should('have.attr', 'src', 'https://www.freetogame.com/g/306/thumbnail.jpg')
    .get('catd-genre').contains('MMORPG')
  })

  it('Should have Ace Online as 6th card', () => {
    cy.get('.card-display')
    .get('.card')
    .eq(5)
    .contains('Ace Online')
    .find('img')
    .should('have.attr', 'src', 'https://www.freetogame.com/g/319/thumbnail.jpg')
    .get('catd-genre').contains('Shooter')
  })

  it('Should show Navbar', () => {

  })
})
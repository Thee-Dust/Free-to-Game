

describe('Detail page', () => {
  beforeEach(() => {
    cy.interceptGames()
      .interceptSingleGame()
      .visit('/')
      .get('.card-section > .card').eq(0).click()
  })

  it('Should be on a games detail page', () => {
    cy.url().should('eq', 'http://localhost:3000/306')
  })

  // it('Should be able to add game to wishlist', () => {
  //   cy.get('.add-wishlist').click()
  //     .get('.remove-wishlist').get('.fas')
  // })

  // it('Should be able to go to website to download', () => {
  //   cy.get('.details-options > :nth-child(1)').contains('a')
  // })

  // it('Should be able to return to home screen', () => {
  //   cy.get('.details-page > a').click()
  //   cy.url().should('eq', 'http://localhost:3000/')
  // })
})
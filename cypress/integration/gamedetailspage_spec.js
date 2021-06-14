describe('Detail page', () => {
  beforeEach(() => {
    cy.interceptGames()
      .interseptSingleGame()
      .visit('/')
  })
})
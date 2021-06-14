

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

  it('Should have games title', () => {
    cy.get('.details-description > h1')
      .contains('4Story')
  })

  it('Should be able to add game to wishlist', () => {
    cy.get('.add-wishlist').click()
      .get('.remove-wishlist').get('.fas')
  })


  it('Should be able to remove game from wishlist', () => {
    cy.get('.add-wishlist').click()
      .get('.remove-wishlist').get('.fas')
      .get('.remove-wishlist').click()
      .get('.add-wishlist').get('.fas')
  })

  it('Should be able to go to website to download', () => {
    cy.get('.details-options > :nth-child(1)').contains('a')
  })

  it('Should be able to return to home screen', () => {
    cy.get('.details-page > a').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should tell system requirements', () => {
    cy.get('.system-req')
      .contains('System requirements')
      .get('.system-req > ul > :nth-child(1)').contains('Graphics: GeForce FX5700 / ATI Equivalent')
      .get('.system-req > ul > :nth-child(2)').contains('Storage: 2 GB')
      .get('.system-req > ul > :nth-child(3)').contains('Memory: 1 GB')
      .get('.system-req > ul > :nth-child(4)').contains('Processor: Intel Pentium 4 1.6 GHz or AMD')
      .get('.system-req > ul > :nth-child(5)').contains('Operating System: XP / 2000 / Vista / 7 / 8')
  })

  // it('Should have an about page', () => {
  //   cy.get('.game-details')
  //     .contains('4Story (or Gates of Andaron in North America) is a 3D Fantasy MMORPG that was developed and published by Zemi Interactive. You are born a hero for one of the three kingdoms and you must battle against the others to put your kingdom on top. Starting out you get to choose from one of the three factions: Defugel, Craxion or Broa. You also choose from three different races: Fairy, Human or Werebeast. After making those two choices you get to choose from six different classes: Assassin, Archer, Summoner, Priest, Warrior, or Wizard all with various different skill sets and abilities. The PvE in this game is made up of tons of quests that offer different challenges and take you all throughout the world of 4Story. Go solo and do the quests or join up with a guild and take on some of the most dangerous areas in the game to earn the best rewards. If PvE isn’t your style you can always look for the games PvP aspects. If you are looking for a small scale PvP experience, you can go the dueling arena where you can fight with small groups in 3v3 battles that will award you bigger and bigger prizes as you claim the ranks. If you are looking for a larger scale PvP combat than that you can join your faction in trying to conquer the other faction’s territories in larger 50v50 player combat. 4Story is an enjoyable MMORPG where you can customize your character, join guilds and battle other factions. It has plenty of content that you can spend hours with and not run out and even if you hit the end game you can continue to play and improve.')
  // })

  // it('Should have screenshots of game', () => {
  //   cy.get('.screen-shots')
  //   .get("[data-cy='pic1']").should('have.attr', 'src', 'https://www.freetogame.com/g/306/4Story-1.jpg')
  //   .get("[data-cy='pic2']").should('have.attr', 'src', 'https://www.freetogame.com/g/306/4Story-2.jpg')
  //   .get("[data-cy='pic3']").eq(2).should('have.attr', 'src', 'https://www.freetogame.com/g/306/4Story-3.jpg')
  // })
})
describe('GameView', () => {
  const number_of_cards_dealt = 5

  function onAsk(game, askedOpponentName, askedRank) {
    game.playTurn(askedOpponentName, askedRank)
    const view = new GameView(game, onAsk)
    view.draw(view.container())
  }

  beforeEach(() => {
    this.player = new Player('Player1')
    this.game = new Game(player)
    game.start()
    this.view = new GameView(game, onAsk)
    this.container = document.createElement('div')
    this.container.id = 'main'
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows that it is the players turn on the first turn', () => {
    expect(document.body.innerHTML).toContain("Your turn")
  })

  it('shows the players hand', () => {
    expect(document.body.innerHTML).toContain("Your hand")
    player.hand().forEach(card => {
      expect(document.body.innerHTML).toContain(card.rank())
    })
  })

  it('shows the opponents', () => {
    expect(document.body.innerHTML).toContain("Opponents")
    game.bots().forEach(bot => {
      expect(document.body.innerHTML).toContain(bot.name())
      expect(document.body.innerHTML).toContain("Cards left: " + bot.cardsLeft())
    })
  })

  it('shows the fished card when a player asks correctly', () => {
    const bot = game.bots()[0]
    const botCard = bot.hand()[0]
    game.player().take(botCard)
    view.draw(container)

    view.radioButton(botCard.key()).click()
    view.radioButton(bot.name()).click()
    view.askButton().click()

    expect(view.rankRadioButtons().length).toBeGreaterThan(number_of_cards_dealt + 1)
  })

  it('shows the result when a player asks correctly', () => {
    const bot = game.bots()[0]
    const botCard = bot.hand()[0]
    game.player().take(botCard)
    view.draw(container)

    view.radioButton(botCard.key()).click()
    view.radioButton(bot.name()).click()
    view.askButton().click()

    expect(container.innerHTML).toContain(`<strong>Turn 1: Player1 asked ${bot.name()} for a ${botCard.rank()} and received`)
  })

  it('does not ask if no rank is selected', () => {
    const opponent = game.bots()[0]
    const card = game.player().hand()[0]

    view.radioButton(opponent.name()).click()

    expect(view.radioButton(card.key()).checkValidity()).toEqual(false)

    view.askButton().click()

    expect(view.rankRadioButtons().length).toEqual(number_of_cards_dealt)
  })

  it('does not ask if no opponent is selected', () => {
    const opponent = game.bots()[0]
    const card = game.player().hand()[0]

    view.radioButton(card.key()).click()

    expect(view.radioButton(opponent.name()).checkValidity()).toEqual(false)

    view.askButton().click()

    expect(view.rankRadioButtons().length).toEqual(number_of_cards_dealt)
  })
})

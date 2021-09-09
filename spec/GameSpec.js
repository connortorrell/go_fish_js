describe('Game', () => {
  const name = 'Player1'
  const bot_names = ["BeepBot", "ToyBot", 'IBot']

  beforeEach(() => {
    this.game = new Game(new Player(name))
  })

  it('creates with a player', () => {
    expect(game.player().name()).toEqual(name)
  })

  it('creates bots', () => {
    game.bots().forEach((bot, i) => {
      expect(bot.name()).toEqual(bot_names[i])
    })
    expect(game.bots().length).toEqual(3)
  })

  it('creates a deck', () => {
    expect(game.deck()).not.toBeNull()
    expect(game.deck().cardsLeft()).toEqual(52)
  })

  describe('#deal', () => {
    const number_of_cards_dealt = 5

    beforeEach(() => {
      game.deal()
    })

    it('gives the player 5 cards', () => {
      expect(game.player().cardsLeft()).toEqual(number_of_cards_dealt)
    })

    it('gives each bot 5 cards', () => {
      game.bots().forEach(bot => {
        expect(bot.cardsLeft()).toEqual(number_of_cards_dealt)
      })
    })
  })
})

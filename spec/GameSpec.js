describe('Game', () => {
  const name = 'Player1'

  beforeEach(() => {
    this.game = new Game(new Player(name))
  })

  it('creates with a player', () => {
    expect(game.player().name()).toEqual(name)
  })

  it('creates bots', () => {
    expect(game.bots()[0].name()).toEqual('BeepBot')
    expect(game.bots()[1].name()).toEqual('ToyBot')
    expect(game.bots()[2].name()).toEqual('IBot')
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
      expect(game.bots()[0].cardsLeft()).toEqual(number_of_cards_dealt)
      expect(game.bots()[1].cardsLeft()).toEqual(number_of_cards_dealt)
      expect(game.bots()[2].cardsLeft()).toEqual(number_of_cards_dealt)
    })
  })
})

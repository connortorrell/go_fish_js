describe('Game', () => {
  beforeEach(() => {
    this.names = ['Player1', 'Player2']
    this.game = new Game([new Player(names[0]), new Player(names[1])])
  })

  it('creates with players', () => {
    expect(game.players()[0].name()).toEqual(names[0])
    expect(game.players()[1].name()).toEqual(names[1])
    expect(game.players().length).toEqual(2)
  })

  it('creates bots', () => {
    expect(game.bots()[0].name()).toEqual('BeepBot')
    expect(game.bots()[1].name()).toEqual('ToyBot')
    expect(game.bots()[2].name()).toEqual('IBot')
    expect(game.bots().length).toEqual(3)
  })

  describe('#deal', () => {
    beforeEach(() => {
      game.deal()
      this.number_of_cards_dealt = 5
    })

    it('gives each player 5 cards', () => {
      expect(game.players()[0].cardsLeft()).toEqual(number_of_cards_dealt)
      expect(game.players()[1].cardsLeft()).toEqual(number_of_cards_dealt)
    })

    it('gives each bot 5 cards', () => {
      expect(game.bots()[0].cardsLeft()).toEqual(number_of_cards_dealt)
      expect(game.bots()[1].cardsLeft()).toEqual(number_of_cards_dealt)
      expect(game.bots()[2].cardsLeft()).toEqual(number_of_cards_dealt)
    })
  })
})

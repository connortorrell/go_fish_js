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

  it('creates a turn index', () => {
    expect(game.turnIndex()).toEqual(0)
  })

  describe('#turnPlayer', () => {
    it('returns the player for the first turn player', () => {
      expect(game.turnPlayer()).toEqual(game.player())
    })

    it('returns the bot when it is the bots turn', () => {
      game.bots().forEach((bot, i) => {
        game._turnIndex++
        expect(game.turnPlayer()).toEqual(bot)
      })
    })

    it('returns the player after the bots turns', () => {
      game._turnIndex = 4
      expect(game.turnPlayer()).toEqual(game.player())
    })
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

  describe('#playTurn', () => {
    beforeEach(() => {
      game.deal()
    })

    it('ends turn if player asks wrong', () => {
      game.playTurn(game.bots()[0].name(), 'Y')
      expect(game.turnIndex()).toBeGreaterThan(0)
    })

    it('does not end turn if player asks right', () => {
      const askedRank = game.bots()[0].hand()[0].rank()
      game.playTurn(game.bots()[0].name(), askedRank)
      expect(game.turnIndex()).toEqual(0)
    })
  })

  describe('#playBotTurn', () => {
    const number_of_cards_dealt = 5

    beforeEach(() => {
      game.deal()
    })

    it('ends turn if bot asks wrong', () => {
      game._turnIndex++
      game.bots()[0].hand()[0] = new Card('Y', "S")
      game.playBotTurn()
      expect(game.bots()[0].cardsLeft()).toBeGreaterThan(number_of_cards_dealt)
    })

    it('does not end turn if player asks right', () => {
      game._turnIndex++
      game.bots()[0].hand()[0] = game.player().hand()[0]
      game.playBotTurn()
      expect(game.bots()[0].cardsLeft()).toBeGreaterThan(number_of_cards_dealt + 1)
    })
  })

  describe('#endTurn', () => {
    beforeEach(() => {
      game.bots().forEach(bot => bot.take(new Card('Y', 'S')))
    })

    it('gives the turn player a card from the deck', () => {
      game.endTurn()
      expect(game.player().cardsLeft()).toEqual(1)
    })

    it('increases the turn index', () => {
      game.endTurn()
      expect(game.turnIndex()).toBeGreaterThan(0)
    })

    it('goes through bot turns after the players turn', () => {
      game.endTurn()
      expect(game.turnIndex()).toEqual(4)
      game.bots().forEach((bot, i) => {
        expect(bot.cardsLeft()).toEqual(2)
      })
    })
  })
})

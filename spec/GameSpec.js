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

  it('creates a results array', () => {
    expect(game.results()).toEqual([])
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

  describe('#players', () => {
    it('returns all the players', () => {
      expect(game.players().includes(game.player())).toEqual(true)
      game.bots().forEach(bot => {
        expect(game.players().includes(bot)).toEqual(true)
      })
    })
  })

  describe('#opponents', () => {
    it('returns all the players except the turnPlayer', () => {
      expect(game.opponents().includes(game.player())).toEqual(false)
      game.bots().forEach(bot => {
        expect(game.opponents().includes(bot)).toEqual(true)
      })
    })
  })

  describe('#deal', () => {
    const numberOfCardsDealt = 5

    beforeEach(() => {
      game.deal()
    })

    it('gives the player 5 cards', () => {
      expect(game.player().cardsLeft()).toEqual(numberOfCardsDealt)
    })

    it('gives each bot 5 cards', () => {
      game.bots().forEach(bot => {
        expect(bot.cardsLeft()).toEqual(numberOfCardsDealt)
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
      expect(game.results().length).toBeGreaterThan(0)
    })

    it('does not end turn if player asks right', () => {
      const askedRank = game.bots()[0].hand()[0].rank()
      game.playTurn(game.bots()[0].name(), askedRank)
      expect(game.turnIndex()).toEqual(0)
      expect(game.results().length).toEqual(1)
    })
  })

  describe('#playBotTurn', () => {
    const numberOfCardsDealt = 5

    beforeEach(() => {
      game.deal()
    })

    it('ends turn if bot asks wrong', () => {
      game._turnIndex++
      const bot = game.bots()[0]
      bot._hand = [new Card('Y', "S")]
      game.playBotTurn()
      expect(bot.cardsLeft()).toBeGreaterThanOrEqual(1)
      expect(game.turnIndex()).toBeGreaterThan(1)
      expect(game.results().length).toBeGreaterThan(0)
    })

    it('gives bot cards when bot asks right', () => {
      game._turnIndex++
      const bot = game.bots()[0]
      bot._hand = [game.player().hand()[0]]
      game.playBotTurn()

      expect(bot.cardsLeft()).toBeGreaterThanOrEqual(1)
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

    it('adds the players result to results', () => {
      game.endTurn()
      expect(game.results().length).toBeGreaterThan(0)
    })
  })

  describe('#roundResults', () => {
    beforeEach(() => {
      game.start()
      game.endTurn() // allow bots to all take turns
    })

    it('only returns results from the most recent round', () => {
      game.endTurn()
      expect(game.roundResults().length).toBeGreaterThanOrEqual(game.players().length)
    })
  })
})

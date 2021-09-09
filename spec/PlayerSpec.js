describe('Player', () => {
  const name = 'Player1'

  beforeEach(() => {
    this.player = new Player(name)
  })

  it('creates with name', () => {
    expect(player.name()).toEqual(name)
  })

  it('creates with empty hand', () => {
    expect(player.hand()).toEqual([])
  })

  describe('#cardsLeft', () => {
    it('returns correct number of cards left in the players hand', () => {
      const card = new Card('A', 'S')
      player.take(card)

      expect(player.cardsLeft()).toEqual(1)
    })
  })

  describe('#take', () => {
    it('adds one card to hand', () => {
      const card = new Card('A', 'S')
      player.take(card)

      expect(player.hand()).toEqual([card])
    })

    it('adds several cards to hand', () => {
      const cards = [new Card('A', 'S'), new Card('K', 'C')]
      player.take(cards)

      expect(player.hand()).toEqual(cards)
    })
  })
})

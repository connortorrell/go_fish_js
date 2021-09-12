describe('Deck', () => {
  const totalNumberOfCards = 52

  beforeEach(() => {
    this.deck = new Deck
  })

  it('build the deck when created', () => {
    expect(deck.cards().length).toEqual(totalNumberOfCards)
  })

  describe('#shuffle', () => {
    it('mixes up the cards in the deck', () => {
      deck2 = new Deck
      deck.shuffle()
      deck2.shuffle()
      expect(deck).not.toEqual(deck2)
    })
  })

  describe('#cardsLeft', () => {
    it('returns the correct number of cards left', () => {
      expect(deck.cardsLeft()).toEqual(totalNumberOfCards)
    })
  })

  describe('#deal', () => {
    it('returns the last card from the deck', () => {
      card = new Card('A', 'S')
      deck.cards().push(card)

      expect(deck.deal()).toEqual(card)
    })

    it('removes the last card from the deck', () => {
      deck.deal()

      expect(deck.cardsLeft()).toEqual(totalNumberOfCards - 1)
    })
  })
})

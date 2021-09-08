describe('Card', () => {
  beforeEach(() => {
    this.rank = 'A'
    this.suit = 'S'
    this.card = new Card(rank, suit)
  })

  it('creates with rank and suit', () => {
    expect(card.rank()).toEqual(rank)
    expect(card.suit()).toEqual(suit)
  })

  it('returns correct value', () => {
    expect(card.value()).toEqual(12)
  })
})

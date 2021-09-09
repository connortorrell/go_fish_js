describe('Card', () => {
  const rank = 'A'
  const suit = 'S'

  beforeEach(() => {
    this.card = new Card(rank, suit)
  })

  it('creates with rank', () => {
    expect(card.rank()).toEqual(rank)
  })

  it('creates with suit', () => {
    expect(card.suit()).toEqual(suit)
  })

  it('returns correct value', () => {
    expect(card.value()).toEqual(12)
  })
})

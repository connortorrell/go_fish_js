describe('Card', () => {
  it('creates with rank and suit', () => {
    let card = new Card('A', 'S')

    expect(card.rank()).toEqual('A')
    expect(card.suit()).toEqual('S')
  })

  it('returns correct value', () => {
    let card = new Card('5', 'S')

    expect(card.value()).toEqual(3)
  })
})

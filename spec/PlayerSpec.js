describe('Player', () => {
  it('creates with name', () => {
    let name = 'Player1'
    let player = new Player(name)

    expect(player.name()).toEqual(name)
  })
})

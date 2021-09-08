describe('Player', () => {
  it('creates with name', () => {
    let player = new Player('Connor')

    expect(player.name()).toEqual('Connor')
  })
})

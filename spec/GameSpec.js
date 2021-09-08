describe('Game', () => {
  it('creates with players', () => {
    let game = new Game([new Player('Player1'), new Player('Player2')])

    expect(game.players()[0].name()).toEqual('Player1')
    expect(game.players()[1].name()).toEqual('Player2')
    expect(game.players().length).toEqual(2)
  })
})

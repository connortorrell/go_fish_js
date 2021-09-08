describe('Game', () => {
  beforeEach(() => {
    this.names = ['Player1', 'Player2']
    this.game = new Game([new Player(names[0]), new Player(names[1])])
  })

  it('creates with players', () => {
    expect(game.players()[0].name()).toEqual(names[0])
    expect(game.players()[1].name()).toEqual(names[1])
    expect(game.players().length).toEqual(2)
  })

  it('creates bots', () => {
    expect(game.bots()[0].name()).toEqual('BeepBot')
    expect(game.bots()[1].name()).toEqual('ToyBot')
    expect(game.bots()[2].name()).toEqual('IBot')
    expect(game.bots().length).toEqual(3)
  })
})

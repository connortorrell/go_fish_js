describe('GameView', () => {
  beforeEach(() => {
    this.player = new Player('Player1')
    const game = new Game(player)
    game.start()
    const view = new GameView(game)
    this.container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows the players hand', () => {
    expect(document.body.innerHTML).toContain("Your hand")
    // TODO: loop through here and other places of repetition
    expect(document.body.innerHTML).toContain(player.hand()[0].rank())
    expect(document.body.innerHTML).toContain(player.hand()[1].rank())
    expect(document.body.innerHTML).toContain(player.hand()[2].rank())
    expect(document.body.innerHTML).toContain(player.hand()[3].rank())
    expect(document.body.innerHTML).toContain(player.hand()[4].rank())
  })
})

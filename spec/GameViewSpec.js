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
    player.hand().forEach(card => {
      expect(document.body.innerHTML).toContain(card.rank())
    })
  })
})

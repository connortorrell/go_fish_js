describe('GameView', () => {
  beforeEach(() => {
    this.player = new Player('Player1')
    this.game = new Game(player)
    game.start()
    const view = new GameView(game)
    this.container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows that it is the players turn on the first turn', () => {
    expect(document.body.innerHTML).toContain("Your turn")
  })

  it('shows the players hand', () => {
    expect(document.body.innerHTML).toContain("Your hand")
    player.hand().forEach(card => {
      expect(document.body.innerHTML).toContain(card.rank())
    })
  })

  it('shows the opponents', () => {
    expect(document.body.innerHTML).toContain("Opponents")
    game.bots().forEach(bot => {
      expect(document.body.innerHTML).toContain(bot.name())
    })
  })
})

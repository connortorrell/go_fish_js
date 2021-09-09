describe('LobbyView', () => {
  const name = 'Player1'

  beforeEach(() => {
    const player = new Player(name)
    this.game = new Game(player)
    const view = new LobbyView(game)
    this.container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows the player in the game', () => {
    expect(document.body.innerHTML).toContain("You")
    expect(document.body.innerHTML).toContain(name)
  })

  it('shows the bots in the game', () => {
    expect(document.body.innerHTML).toContain("Bots")
    game.bots().forEach(bot => {
      expect(document.body.innerHTML).toContain(bot.name())
    })
  })

  it('shows the start button', () => {
    expect(document.body.innerHTML).toContain("Start")
  })
})

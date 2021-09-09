describe('LobbyView', () => {
  beforeEach(() => {
    this.names = 'Player1'
    const player = new Player(name)
    const game = new Game(player)
    this.view = new LobbyView(game)
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
    expect(document.body.innerHTML).toContain("BeepBot")
    expect(document.body.innerHTML).toContain("ToyBot")
    expect(document.body.innerHTML).toContain("IBot")
  })

  it('shows the start button', () => {
    expect(document.body.innerHTML).toContain("Start")
  })
})

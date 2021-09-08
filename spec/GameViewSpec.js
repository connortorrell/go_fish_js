describe('GameView', () => {
  beforeEach(() => {
    this.names = ['Player1', 'Player2']
    const players = [new Player(names[0]), new Player(names[1])]
    const game = new Game(players)
    const view = new GameView(game)
    this.container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  describe('lobby', () => {
    it('shows the players in the game', () => {
      expect(document.body.innerHTML).toContain("Players")
      expect(document.body.innerHTML).toContain(names[0])
      expect(document.body.innerHTML).toContain(names[1])
    })

    it('shows the bots in the game', () => {
      expect(document.body.innerHTML).toContain("Bots")
      expect(document.body.innerHTML).toContain("BeepBot")
      expect(document.body.innerHTML).toContain("ToyBot")
      expect(document.body.innerHTML).toContain("IBot")
    })
  })

  describe('start', () => {
    it('shows the start button', () => {
      expect(document.body.innerHTML).toContain("Start")
    })
  })
})

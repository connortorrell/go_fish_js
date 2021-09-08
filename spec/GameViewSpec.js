describe('GameView', () => {
  describe('lobby', () => {
    it('calls the passed in function with logged in player name', () => {
      const players = [new Player('Connor'), new Player('Jeremy')]
      const game = new Game(players)
      const view = new GameView(game)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)

      expect(document.body.innerHTML).toContain('Connor')
      expect(document.body.innerHTML).toContain('Jeremy')
      container.remove()
    })
  })
})

describe('GameOverView', () => {
  it('calls the passed in function', () => {
    let calledWith
    const name = 'Player1'
    const onPlayAgain = () => { calledWith = name }
    const game = new Game(new Player(name))
    const view = new GameOverView(game, onPlayAgain)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
    view.playAgainButton().click()

    expect(calledWith).toEqual(name)
    container.remove()
  })
})

describe('PlayView', () => {
  it('calls the passed in function with logged in player name', () => {
    let calledWith
    const onPlay = (name) => { calledWith = name }
    const view = new PlayView(onPlay)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
    let name = 'Player1'
    view.nameInput().value = name
    view.playButton().click()

    expect(calledWith).toEqual(name)
    container.remove()
  })
})

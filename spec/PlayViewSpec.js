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

  it('does not call the passed in function when no name is given', () => {
    let calledWith
    const onPlay = (name) => { calledWith = name }
    const view = new PlayView(onPlay)
    const container = document.createElement('div')
    document.body.appendChild(container)
    view.draw(container)
    view.playButton().click()

    expect(calledWith).not.toEqual(name)
    expect(view.nameInput().checkValidity()).toEqual(false)
    container.remove()
  })
})

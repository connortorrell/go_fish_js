class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const markup = `
      <h1>Welcome to Go Fish!</h1>

      <h2>Players</h2>
      <ul>
        ${this.game().players().map(player => `<li>${player.name()}</li>`).join()}
      </ul>
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    return element
  }
}

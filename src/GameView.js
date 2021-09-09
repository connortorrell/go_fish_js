class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const markup = `
      <h1>Your hand</h1>

      <ul>
        ${this.game().player().hand().map(card => `<li>${card.rank()}</li>`).join('')}
      </ul>
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    return element
  }
}

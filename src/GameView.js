class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  draw(container) {
    const markup = this.titleMarkup() + this.handMarkup() + this.opponentsMarkup()

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    return element
  }

  titleMarkup() {
    return `
      <h1>Your turn!</h1>
    `
  }

  handMarkup() {
    return `
      <h2>Your hand</h2>

      <ul>
        ${this.game().player().hand().map(card => `<li>${card.rank()}</li>`).join('')}
      </ul>
    `
  }

  opponentsMarkup() {
    return `
      <h2>Opponents</h2>

      <ul>
        ${this.game().bots().map(bot => `<li>${bot.name()}</li>`).join('')}
      </ul>
    `
  }
}

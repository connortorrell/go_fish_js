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
    `
    + this.playerList() + this.botList() + this.startButton()

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    document.getElementById('start').onclick = this.game().start.bind(this.game())
    return element
  }

  playerList() {
    return `
      <h2>Players</h2>
      <ul>
        ${this.game().players().map(player => `<li>${player.name()}</li>`).join('')}
      </ul>
    `
  }

  botList() {
    return `
      <h2>Bots</h2>
      <ul>
        ${this.game().bots().map(bot => `<li>${bot.name()}</li>`).join('')}
      </ul>
    `
  }

  startButton() {
    return `
      <button id="start">Start</button>
    `
  }
}

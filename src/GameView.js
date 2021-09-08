class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  startButton() {
    return document.getElementById('start')
  }

  draw(container) {
    const markup = `
      <h1>Welcome to Go Fish!</h1>
    `
    + this.drawPlayerList() + this.drawBotList() + this.drawStartButton()

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    this.startButton().onclick = this.game().start.bind(this.game())
    return element
  }

  drawPlayerList() {
    return `
      <h2>Players</h2>
      <ul>
        ${this.game().players().map(player => `<li>${player.name()}</li>`).join('')}
      </ul>
    `
  }

  drawBotList() {
    return `
      <h2>Bots</h2>
      <ul>
        ${this.game().bots().map(bot => `<li>${bot.name()}</li>`).join('')}
      </ul>
    `
  }

  drawStartButton() {
    return `
    <button id="start">Start</button>
    `
  }
}

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
    + this.drawPlayers() + this.drawBots()

    const element = document.createElement('div')
    element.innerHTML = markup
    element.appendChild(this.drawStartButton())
    container.innerHTML = ''
    container.appendChild(element)
    return element
  }

  drawPlayers() {
    return `
      <h2>Players</h2>
      <ul>
        ${this.game().players().map(player => `<li>${player.name()}</li>`).join('')}
      </ul>
    `
  }

  drawBots() {
    return `
      <h2>Bots</h2>
      <ul>
        ${this.game().bots().map(bot => `<li>${bot.name()}</li>`).join('')}
      </ul>
    `
  }

  drawStartButton() {
    let button = document.createElement('button')
    button.innerHTML = "Start"
    button.onclick = this.game().start
    return button
  }
}

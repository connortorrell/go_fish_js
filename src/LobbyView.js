class LobbyView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  container() {
    return document.getElementById('main')
  }

  startButton() {
    return document.getElementById('start')
  }

  startGame() {
    this.game().start()
    const view = new GameView(this.game())
    view.draw(this.container())
  }

  draw(container) {
    const markup = `
      <h1>Welcome to Go Fish!</h1>
    `
    + this.drawPlayer() + this.drawBots() + this.drawStartButton()

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    this.startButton().onclick = this.startGame.bind(this)
    return element
  }

  drawPlayer() {
    return `
      <h2>You</h2>
      <ul>
        <li>${this.game().player().name()}</li>
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
    return `
    <button id="start">Start</button>
    `
  }
}

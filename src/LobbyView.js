class LobbyView {
  constructor(game, onStart) {
    this._game = game
    this.onStart = onStart
  }

  game() {
    return this._game
  }

  onClick(event) {
    event.preventDefault()
    this.onStart(this.game())
  }

  container() {
    return document.getElementById('main')
  }

  startButton() {
    return document.getElementById('start')
  }

  draw(container) {
    const markup = `
      <h1>Welcome to Go Fish!</h1>
      ${this.playerMarkup()}
      ${this.botsMarkup()}
      ${this.startButtonMarkup()}
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    this.startButton().onclick = this.onClick.bind(this)
    return element
  }

  playerMarkup() {
    return `
      <h2>You</h2>
      <ul>
        <li>${this.game().player().name()}</li>
      </ul>
    `
  }

  botsMarkup() {
    return `
      <h2>Bots</h2>
      <ul>
        ${this.game().bots().map(bot => `<li>${bot.name()}</li>`).join('')}
      </ul>
    `
  }

  startButtonMarkup() {
    return `
    <button id="start">Start</button>
    `
  }
}

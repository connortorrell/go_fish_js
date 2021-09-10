class GameView {
  constructor(game, onAsk) {
    this._game = game
    this.onAsk = onAsk
  }

  game() {
    return this._game
  }

  onSubmit(event) {
    event.preventDefault();
    this.onAsk(this.game(), event.target.opponentName.value, event.target.rank.value)
  }

  container() {
    return document.getElementById('main')
  }

  rankRadioButtons() {
    return document.getElementsByName('rank')
  }

  radioButton(id) {
    return document.getElementById(id)
  }

  askButton() {
    return document.getElementById('ask')
  }

  draw(container) {
    const markup = `
      <h1>Your turn!</h1>
      ${this.formMarkup()}
      ${this.resultMarkup()}
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    element.onsubmit = this.onSubmit.bind(this)
    return element
  }

  formMarkup() {
    return `
      <form class="turn-form">
        ${this.handMarkup()}
        ${this.opponentsMarkup()}
        <input id="ask" type="submit" value="Ask">
      </form>
    `
  }

  handMarkup() {
    return `
      <h2>Your hand</h2>

      ${this.game().player().hand().map(card => `
        <input type="radio" id="${card.key()}" name="rank" value="${card.rank()}" required>
        <label for="${card.key()}">${card.rank()}</label>
        <br>
      `).join('')}
    `
  }

  opponentsMarkup() {
    return `
      <h2>Opponents</h2>

      ${this.game().bots().map(bot => `
        <input type="radio" id="${bot.name()}" name="opponentName" value="${bot.name()}" required>
        <label for="${bot.name()}">${bot.name()} (Cards left: ${bot.cardsLeft()})</label>
        <br>
      `).join('')}
    `
  }

  resultMarkup() {
    return `
      <h2>Results</h2>

      ${this.game().lastResult()}
    `
  }
}

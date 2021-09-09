class GameView {
  constructor(game) {
    this._game = game
  }

  game() {
    return this._game
  }

  onSubmit(event) {
    event.preventDefault();
    this.game().play(event.target.rank.value, event.target.opponent.value)
  }

  draw(container) {
    const markup = `
      ${this.titleMarkup()}
      ${this.formMarkup()}
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    element.onsubmit = this.onSubmit.bind(this)
    return element
  }

  titleMarkup() {
    return `
      <h1>Your turn!</h1>
    `
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
        <input type="radio" id="${bot.name()}" name="opponent" value="${bot.name()}" required>
        <label for="${bot.name()}">${bot.name()} (Cards left: ${bot.cardsLeft()})</label>
        <br>
      `).join('')}
    `
  }
}

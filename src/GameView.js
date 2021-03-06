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
      ${this.deckMarkup()}
      ${this.formMarkup()}
      ${this.resultsMarkup()}
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    element.onsubmit = this.onSubmit.bind(this)
    return element
  }

  deckMarkup() {
    return `
      <h2>Cards left in the deck: ${this.game().deck().cardsLeft()}</h2>
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

      <p><strong>Books: ${this.game().player().books()}</strong></p>
    `
  }

  opponentsMarkup() {
    return `
      <h2>Opponents</h2>

      ${this.game().bots().map(bot => `
        <input type="radio" id="${bot.name()}" name="opponentName" value="${bot.name()}" required>
        <label for="${bot.name()}">${bot.name()} (Cards left: ${bot.cardsLeft()}) (Books: ${bot.books()})</label>
        <br>
      `).join('')}
    `
  }

  resultsMarkup() {
    return `
      <h2>Round results</h2>

      <ul>
        ${this.gameResults()}
      </ul>
    `
  }

  gameResults() {
    if(this.game().results().length !== 0){
      return this.game().roundResults().map(result => result.turnPlayer().name() == this.game().player().name() ? `<li><strong>${result.message()}</strong></li>` : `<li>${result.message()}</li>`).reverse().join('')
    } else {
      return `<li>There are no results yet</li>`
    }
  }
}

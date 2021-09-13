class GameOverView {
  constructor(game, onPlayAgain) {
    this._game = game
    this.onPlayAgain = onPlayAgain
  }

  game() {
    return this._game
  }

  onClick(event) {
    event.preventDefault()
    this.onPlayAgain()
  }

  playAgainButton() {
    return document.getElementById('playAgain')
  }

  draw(container) {
    const markup = `
      <h1>Game Over!</h1>
      ${this.standingsMarkup()}
      ${this.resultsMarkup()}
      <button id="playAgain">Play again</button>
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    this.playAgainButton().onclick = this.onClick.bind(this)
    return element
  }

  standingsMarkup() {
    return `
      <h2>Standings</h2>

      <ul>
        ${this.game().standings().map(player => player === this.game().player() ? `<li><strong>${player.name()} (Books: ${player.books()})</strong></li>` : `<li>${player.name()} (Books: ${player.books()})</li>`).join('')}
      </ul>
    `
  }

  resultsMarkup() {
    return `
      <h2>Round results</h2>

      <ul>
        ${this.game().roundResults().map(result => result.turnPlayer().name() == this.game().player().name() ? `<li><strong>${result.message()}</strong></li>` : `<li>${result.message()}</li>`).reverse().join('')}
      </ul>
    `
  }
}

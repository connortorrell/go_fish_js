const BOT_NAMES = ['BeepBot', 'ToyBot', 'IBot']
const STARTING_HAND_COUNT = 5

class Game {
  constructor(player, number_of_bots = 3) {
    this._player = player
    this.createBots(number_of_bots)
    this._deck = new Deck
    this._turnIndex = 0
    this._results = []
  }

  player() {
    return this._player
  }

  bots() {
    return this._bots
  }

  players() {
    return [this.player(), ...this.bots()]
  }

  deck() {
    return this._deck
  }

  turnIndex() {
    return this._turnIndex
  }

  results() {
    return this._results
  }

  roundResults() {
    const lastResult = this.results()[this.results().length - 1]
    return this.results().filter(result => lastResult.drewCard() ? this.turnIndex() - result.turnIndex() < this.players().length : (this.turnIndex() + 1) - result.turnIndex() < this.players().length)
  }

  turnPlayer() {
    return this.players()[this.turnIndex() % this.players().length]
  }

  createBots(number_of_bots) {
    this._bots = [...Array(number_of_bots)].map((_, i) => new Bot(BOT_NAMES[i]))
  }

  // TODO: write test for this when turns are implemented
  start() {
    this.deal()
  }

  deal() {
    [...Array(STARTING_HAND_COUNT)].forEach((_, i) => {
      this.player().take(this.deck().deal())
      this.bots().forEach(bot => bot.take(this.deck().deal()))
    })
  }

  playTurn(askedOpponentName, askedRank) {
    const askedOpponent = this.bots().find(bot => bot.name() === askedOpponentName)
    const cardsFished = this.player().ask(askedOpponent, askedRank)
    if(cardsFished.length == 0) {
      this.endTurn(askedOpponentName, askedRank)
    } else {
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer().name(), askedOpponentName, askedRank, cardsFished))
    }
  }

  playBotTurn() {
    const askedOpponent = this.player()
    const askedRank = this.turnPlayer().hand()[0].rank()
    const cardsFished = this.turnPlayer().ask(askedOpponent, askedRank)
    if(cardsFished.length == 0) {
      this.endTurn(askedOpponent.name(), askedRank)
    } else {
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer().name(), askedOpponent.name(), askedRank, cardsFished))
      this.playBotTurn()
    }
  }

  endTurn(askedOpponentName, askedRank) {
    const cardDrawn = this.deck().deal()
    this.turnPlayer().take(cardDrawn)
    this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer().name(), askedOpponentName, askedRank, cardDrawn))
    this._turnIndex++
    if (this.turnPlayer().constructor.name === 'Bot') {
      this.playBotTurn()
    }
  }
}

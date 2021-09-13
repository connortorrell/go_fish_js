const BOT_NAMES = ['BeepBot', 'ToyBot', 'IBot']
const STARTING_HAND_COUNT = 5
const TOTAL_BOOKS = 13

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

  opponents() {
    return this.players().filter(player => player !== this.turnPlayer())
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
    return this.results().filter(result => lastResult.endOfTurn() ? this.turnIndex() - result.turnIndex() < this.players().length : (this.turnIndex() + 1) - result.turnIndex() < this.players().length)
  }

  turnPlayer() {
    return this.players()[this.turnIndex() % this.players().length]
  }

  createBots(number_of_bots) {
    this._bots = [...Array(number_of_bots)].map((_, i) => new Bot(BOT_NAMES[i]))
  }

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
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponentName, askedRank, cardsFished, this.over()))
      this.startTurn()
    }
  }

  playBotTurn() {
    const askedOpponent = this.turnPlayer().chooseOpponent(this.opponents())
    const askedRank = this.turnPlayer().chooseRank()
    const cardsFished = this.turnPlayer().ask(askedOpponent, askedRank)
    if(cardsFished.length == 0) {
      this.endTurn(askedOpponent.name(), askedRank)
    } else {
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponent.name(), askedRank, cardsFished, this.over()))
      this.startTurn()
    }
  }

  endTurn(askedOpponentName, askedRank) {
    const cardDrawn = this.deck().deal()
    this.turnPlayer().take(cardDrawn)
    this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponentName, askedRank, cardDrawn, this.over()))
    this.nextTurn()
  }

  nextTurn() {
    this._turnIndex++
    this.startTurn()
  }

  startTurn() {
    if(this.turnPlayer().cardsLeft() === 0){
      this.outOfCards()
    } else if(this.turnPlayer().constructor.name === 'Bot') {
      this.playBotTurn()
    }
  }

  outOfCards() {
    if(!this.over()) {
      if(this.deck().empty()) {
        this.nextTurn()
      } else{
        this.turnPlayer().take(this.deck().deal())
        if(this.turnPlayer().constructor.name === 'Bot') {
          this.playBotTurn()
        }
      }
    } else {
      this._turnIndex++
    }
  }

  over() {
    let totalBooks = 0
    this.players().forEach(player => totalBooks += player.books())
    return totalBooks === TOTAL_BOOKS
  }

  standings() {
    return this.players().sort((a, b) => b.books() - a.books())
  }
}

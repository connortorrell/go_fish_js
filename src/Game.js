const BOT_NAMES = ['BeepBot', 'ToyBot', 'IBot']
const STARTING_HAND_COUNT = 5

class Game {
  constructor(player, number_of_bots = 3) {
    this._player = player
    this.createBots(number_of_bots)
    this._deck = new Deck
    this._turnIndex = 0
  }

  player() {
    return this._player
  }

  bots() {
    return this._bots
  }

  deck() {
    return this._deck
  }

  turnIndex() {
    return this._turnIndex
  }

  result() {
    return this._result
  }

  turnPlayer() {
    const allPlayers = [this.player()].concat(this.bots())
    return allPlayers[this.turnIndex() % allPlayers.length]
  }

  lastResult() {
    if(this.result() !== undefined){
      return this.result().message()
    } else {
      return "There are no results yet"
    }
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
      this._result = new Result(this.turnIndex(), this.turnPlayer().name(), askedOpponentName, askedRank, cardsFished)
    }
  }

  playBotTurn() {
    const askedOpponent = this.player()
    const askedRank = this.turnPlayer().hand()[0].rank()
    const cardsFished = this.turnPlayer().ask(askedOpponent, askedRank)
    if(cardsFished.length == 0) {
      this.endTurn(askedOpponent.name(), askedRank)
    } else {
      this._result = new Result(this.turnIndex(), this.turnPlayer().name(), askedOpponent.name(), askedRank, cardsFished)
      this.playBotTurn()
    }
  }

  endTurn(askedOpponentName, askedRank) {
    const cardDrawn = this.deck().deal()
    this.turnPlayer().take(cardDrawn)
    this._result = new Result(this.turnIndex(), this.turnPlayer().name(), askedOpponentName, askedRank, cardDrawn)
    this._turnIndex++
    if (this.turnPlayer().constructor.name === 'Bot') {
      this.playBotTurn()
    }
  }
}

const BOT_NAMES = ['BeepBot', 'ToyBot', 'IBot']
const STARTING_HAND_COUNT = 5

class Game {
  constructor(player, number_of_bots = 3) {
    this._player = player
    this.createBots(number_of_bots)
    this._deck = new Deck
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
}

const botNames = ['BeepBot', 'ToyBot', 'IBot']

class Game {
  constructor(players, number_of_bots = 3) {
    this._players = players
    this.createBots(number_of_bots)
  }

  players() {
    return this._players
  }

  bots() {
    return this._bots
  }

  createBots(number_of_bots) {
    let bots = []
    for(let i = 0; i < number_of_bots; i++) {
      bots.push(new Bot(botNames[i]))
    }
    this._bots = bots
  }

  start() {
    console.log("start")
  }
}

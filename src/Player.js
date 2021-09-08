class Player {
  constructor(name) {
    this._name = name
    this._hand = []
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand
  }

  cardsLeft() {
    return this.hand().length
  }

  take(cards) {
    this._hand = this._hand.concat(cards)
  }
}

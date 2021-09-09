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
    this._hand = this.hand().concat(cards)
  }

  give(rank) {
    const matchingCards = this.hand().filter(card => card.rank() === rank)
    this._hand = this.hand().filter(card => !matchingCards.includes(card))
    return matchingCards
  }

  ask(opponent, rank) {
    const cardsFished = opponent.give(rank)
    this.take(cardsFished)
    return cardsFished
  }
}

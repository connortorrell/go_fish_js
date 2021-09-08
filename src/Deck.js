class Deck {
  constructor() {
    this.build()
  }

  cards() {
    return this._cards
  }

  build() {
    let cards = []
    RANKS.forEach(rank => SUITS.forEach(suit => cards.push(new Card(rank, suit))))
    this._cards = cards
  }

  cardsLeft() {
    return this.cards().length
  }

  deal() {
    return this.cards().pop()
  }
}

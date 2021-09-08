class Deck {
  constructor() {
    this.build()
    this.shuffle()
  }

  cards() {
    return this._cards
  }

  build() {
    let cards = []
    RANKS.forEach(rank => SUITS.forEach(suit => cards.push(new Card(rank, suit))))
    this._cards = cards
  }

  shuffle() {
    this.cards().sort(() => Math.random() - 0.5);
  }

  cardsLeft() {
    return this.cards().length
  }

  deal() {
    return this.cards().pop()
  }
}

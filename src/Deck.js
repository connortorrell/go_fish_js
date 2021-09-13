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

  deal() {
    if(!this.empty()){
      return this.cards().pop()
    } else {
      return []
    }
  }

  cardsLeft() {
    return this.cards().length
  }

  empty() {
    return this.cardsLeft() === 0
  }
}

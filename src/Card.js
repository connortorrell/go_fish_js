const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

class Card {
  constructor(rank, suit) {
    this._rank = rank
    this._suit = suit
  }

  rank() {
    return this._rank
  }

  suit() {
    return this._suit
  }

  value(){
    return ranks.indexOf(this.rank())
  }
}

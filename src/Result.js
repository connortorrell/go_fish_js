class Result {
  constructor(turnIndex, turnPlayerName, askedOpponentName, askedRank, cardsFished) {
    this._turnIndex = turnIndex
    this._turnPlayerName = turnPlayerName
    this._askedOpponentName = askedOpponentName
    this._askedRank = askedRank
    this._cardsFished = cardsFished
  }

  turnIndex() {
    return this._turnIndex
  }

  turnPlayerName() {
    return this._turnPlayerName
  }

  askedOpponentName() {
    return this._askedOpponentName
  }

  askedRank() {
    return this._askedRank
  }

  cardsFished() {
    return this._cardsFished
  }

  drewCard() {
    return !Array.isArray(this.cardsFished())
  }

  message() {
    if(this.drewCard()) {
      return `Turn ${this.turnIndex()}: ${this.turnPlayerName()} asked ${this.askedOpponentName()} for a ${this.askedRank()}. Go fish ${this.turnPlayerName()}!`
    } else {
      return `Turn ${this.turnIndex()}: ${this.turnPlayerName()} asked ${this.askedOpponentName()} for a ${this.askedRank()} and received ${this.cardsFished().length}`
    }
  }
}

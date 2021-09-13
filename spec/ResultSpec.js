describe('Result', () => {
  const name = 'Player1'
  const askedOpponentName = 'BeepBot'
  const askedRank = 'K'

  beforeEach(() => {
    this.player = new Player(name)
    this.game = new Game(player)
    game.deal()
    this.cardDrawn = game.deck().deal()
    this.result = new Result(game.turnIndex() + 1, player, askedOpponentName, askedRank, cardDrawn)
  })

  it('creates with a turn index', () => {
    expect(result.turnIndex()).toEqual(game.turnIndex() + 1)
  })

  it('creates with a turn player', () => {
    expect(result.turnPlayer()).toEqual(player)
  })

  it('creates with an asked opponent name', () => {
    expect(result.askedOpponentName()).toEqual(askedOpponentName)
  })

  it('creates with an asked rank', () => {
    expect(result.askedRank()).toEqual(askedRank)
  })

  it('creates with cards fished', () => {
    expect(result.cardsFished()).toEqual(cardDrawn)
  })

  describe('#drewCard', () => {
    it('returns true if cardsFished is not an Array', () => {
      expect(result.drewCard()).toEqual(true)
    })

    it('returns false if cardsFished is an Array', () => {
      result._cardsFished = [new Card('A', 'S')]
      expect(result.drewCard()).toEqual(false)
    })
  })

  describe('#message', () => {
    it('returns go fish message when drewCard is true', () => {
      expect(result.message()).toEqual('Turn 1: Player1 asked BeepBot for a K. Go fish Player1!')
    })

    it('returns success message when drewCard is false', () => {
      result._cardsFished = [new Card('A', 'S')]
      expect(result.message()).toEqual('Turn 1: Player1 asked BeepBot for a K and received 1')
    })
  })
})

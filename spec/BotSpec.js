describe('Bot', () => {
  beforeEach(() => {
    this.name = 'Bot1'
    this.bot = new Bot(name)
  })

  it('creates with name', () => {
    expect(bot.name()).toEqual(name)
  })

  it('creates with empty hand', () => {
    expect(bot.hand()).toEqual([])
  })
})

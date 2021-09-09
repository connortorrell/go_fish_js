describe('Bot', () => {
  const name = 'Bot1'

  beforeEach(() => {
    this.bot = new Bot(name)
  })

  it('creates with name', () => {
    expect(bot.name()).toEqual(name)
  })

  it('creates with empty hand', () => {
    expect(bot.hand()).toEqual([])
  })
})

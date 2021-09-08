describe('Bot', () => {
  it('creates with name', () => {
    let name = 'Bot1'
    let bot = new Bot(name)

    expect(bot.name()).toEqual(name)
  })
})

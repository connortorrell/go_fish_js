describe('LoginView', () => {
  describe('form submit', () => {
    it('calls the passed in function with logged in player name', () => {
      let calledWith
      const onLogin = (name) => { calledWith = name }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      let name = 'Player1'
      view.nameInput().value = name
      view.submitButton().click()

      expect(calledWith).toEqual(name)
      container.remove()
    })
  })
})

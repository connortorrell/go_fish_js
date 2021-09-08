describe('LoginView', () => {
  describe('form submit', () => {
    it('calls the passed in function with logged in player name', () => {
      let calledWith
      const onLogin = (name) => { calledWith = name }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.nameInput().value = 'Connor'
      view.submitButton().click()
      
      expect(calledWith).toEqual('Connor')
      container.remove()
    })
  })
})

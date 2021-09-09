class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  onSubmit(event) {
    event.preventDefault();
    this.onLogin(event.target.name.value)
  }

  nameInput() {
    return document.getElementById('name')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input id="name" type="text" required>

        <input id="submit" type="submit" value="Login">
      </form>
    `

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}

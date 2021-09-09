class PlayView {
  constructor(onPlay) {
    this.onPlay = onPlay
  }

  onSubmit(event) {
    event.preventDefault();
    this.onPlay(event.target.name.value)
  }

  nameInput() {
    return document.getElementById('name')
  }

  playButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input id="name" type="text" required>

        <input id="submit" type="submit" value="Play">
      </form>
    `

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}

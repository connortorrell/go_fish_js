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
    const markup = this.titleMarkup() + this.formMarkup()

    const element = document.createElement('div')
    element.innerHTML = markup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }

  titleMarkup() {
    return `
      <h1>Go Fish</h1>
    `
  }

  formMarkup() {
    return `
      <form class="user-form">
        <label for="name">Name</label>
        <input id="name" type="text" required>

        <input id="submit" type="submit" value="Play">
      </form>
    `
  }
}

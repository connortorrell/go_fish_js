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
    return document.getElementById('play')
  }

  draw(container) {
    const markup = `
      <h1>Go Fish</h1>
      ${this.formMarkup()}
    `

    const element = document.createElement('div')
    element.innerHTML = markup
    container.innerHTML = ''
    container.appendChild(element)
    element.onsubmit = this.onSubmit.bind(this)
    return element
  }

  formMarkup() {
    return `
      <form class="user-form">
        <label for="name">Name</label>
        <input id="name" type="text" required>

        <input id="play" type="submit" value="Play">
      </form>
    `
  }
}

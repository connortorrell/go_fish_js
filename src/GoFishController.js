class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.joinGame.bind(this))
    view.draw(this.container())
  }

  joinGame(name) {
    const player = new Player(name)
    const game = new Game(player)
    const view = new LobbyView(game)
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)

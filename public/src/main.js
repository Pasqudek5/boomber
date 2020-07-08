import Timer from "./Timer.js"
import loadLevel from "./loaders/level.js"

const main = async (canvas) => {
  const context = canvas.getContext('2d')

  const timer = new Timer(1/60)

  const level = await loadLevel('1')

  timer.update = (deltaTime) => {
    level.draw(context)
    level.update(deltaTime, context)
  }

  timer.start()
}

const canvas = document.getElementById('screen')
main(canvas)
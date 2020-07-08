export default class Timer {
  constructor(deltaTime = 1/60) {
    let lastTime = 0
    let accumulatedTime = 0

    this.updateProxy = (time) => {
      if (accumulatedTime > 1) {
        accumulatedTime = 1
      }

      accumulatedTime += (time - lastTime) / 1000

      while (accumulatedTime > deltaTime) {
        this.update(deltaTime)

        accumulatedTime -= deltaTime
      }
      lastTime = time
      this.enqueue()
    }
  }

  start() {
    this.enqueue()
  }

  enqueue() {
    requestAnimationFrame(this.updateProxy)
  }
}
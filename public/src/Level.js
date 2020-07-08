import Compositor from "./Compositor.js";

export default class Level {
  constructor(levelName) {
    this.name = levelName
    this.compositor = new Compositor()
    this.entities = []
  }

  draw(context) {
    this.compositor.draw(context)
    console.log('draw')
  }

  update(deltaTime, context) {
    this.entities.forEach(entity => {
      entity.update(deltaTime, context)
    })
  }
}
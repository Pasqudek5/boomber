import Compositor from "./Compositor.js";
import Collider from "./Collider.js";

export default class Level {
  constructor(levelName) {
    this.name = levelName
    this.collider = new Collider()
    this.compositor = new Compositor()
    this.entities = []
  }

  draw(context) {
    this.compositor.draw(context)
  }

  update(deltaTime, context) {
    this.entities.forEach(entity => {
      entity.update(deltaTime)
    })
  }
}
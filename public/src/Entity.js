import Vec2 from "./math/Vec2.js";
import {loadImage} from "./loaders/image.js";

const loadEntity = (name) => {
  const frames = [
    Array(4).fill('up'),
    Array(4).fill('down'),
    Array(4).fill('left'),
    Array(4).fill('right'),
  ].map(direction => direction.map((directionName, i) => `${name}_${directionName}_${i}`))
   .flat(4)
   .map(async frameName => ({
     img: await loadImage(`/assets/skin/${name}/${frameName}.png`),
     name: frameName
   }))

  Promise.all(frames).then(r => r)
}

export default class Entity {
  constructor(id, sprites) {
    loadEntity('bird')
    this.id = id
    this.position = new Vec2(0, 0)
    this.velocity = new Vec2(0, 0)
    this.size = new Vec2(0, 0)
  }

  update(deltaTime) {}

  draw(context) {

  }
}
export default class SpriteSheet {
  constructor() {
    this.sprites = new Map()
  }

  get(name) {
    return this.sprites.get(name)
  }

  addSprite(name, width, height, img) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')
    context.drawImage(
     img,
     0,
     0,
     width,
     height
    )

    this.sprites.set(name, canvas)
  }

  draw(context, x, y, spriteName) {
    const sprite = this.get(spriteName)
    context.drawImage(sprite, x, y)
  }
}
export default class SpriteSheet {
  constructor() {
    this.sprites = new Map()
  }

  addSprite(spriteName, width, height, img) {
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

    this.sprites.set(spriteName, canvas)
  }

  draw(context, x, y, spriteName) {
    const sprite = this.sprites.get(spriteName)
    context.drawImage(sprite, x, y)
  }
}
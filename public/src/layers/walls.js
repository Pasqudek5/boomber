export default function createBackgroundLayer(levelSpec, tiles, sprites) {
  const buffer = document.createElement('canvas')
  buffer.width = levelSpec.width
  buffer.height = levelSpec.height
  const bufferContext = buffer.getContext('2d')

  const redraw = () => {
    bufferContext.clearRect(0, 0, buffer.width, buffer.height)
    tiles.forEach((x, y, value) => {
      const sprite = sprites.get(value)
      const { width, height } = sprite
      bufferContext.drawImage(sprite, x * width, y * height)
    })
  }

  return function drawBackgroundLayer(context) {
    redraw()
    context.drawImage(buffer, 0, 0)
  }
}
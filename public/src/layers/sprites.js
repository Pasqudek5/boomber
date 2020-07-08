export default function createSpritesLayer(entities, width = 22, height = 27) {
  const buffer = document.createElement('canvas')
  buffer.width = width
  buffer.height = height
  const bufferContext = buffer.getContext('2d')

  return function drawSpritesLayer(context) {
    entities.forEach(entity => {
      bufferContext.clearRect(0, 0, width, height)
      entity.draw(bufferContext)
      context.drawImage(buffer, entity.position.x, entity.position.y)
    })
  }
}
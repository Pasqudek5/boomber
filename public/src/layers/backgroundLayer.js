export default function createBackgroundLayer(background) {
  const buffer = document.createElement('canvas')
  buffer.width = background.width
  buffer.height = background.height

  const bufferContext = buffer.getContext('2d')
  bufferContext.drawImage(background, 0, 0, buffer.width, buffer.height)

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0)
  }
}
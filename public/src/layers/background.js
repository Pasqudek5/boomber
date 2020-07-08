export default function createBackgroundLayer(sprites) {
  const background = sprites.get('background')

  return function drawBackgroundLayer(context) {
    context.drawImage(background, 0, 0)
  }
}
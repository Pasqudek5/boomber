import Level from "../Level.js";
import {loadJSON} from "./json.js"
import createBackgroundLayer from "../layers/background.js"
import createWallsLayer from "../layers/walls.js"
import createSpritesLayer from "../layers/sprites.js";
import Matrix from "../math/Matrix.js";
import {loadSpriteSheet} from "./spriteSheet.js";
import Entity from "../Entity.js";

const createEntities = (level) => {
  const entity = new Entity('#1')
  level.entities.push(entity)
}

const createGrid = (width, height, tileSize) => {
  const grid = new Matrix()
// add dynamic name for speedups
  for (let x = 0; x < width / tileSize; x++) {
    for (let y = 0; y < height / tileSize; y++) {
      if (Math.random() > 0.45) {
        grid.set(x, y, 'wall')
      }
    }
  }

  return grid
}

export default function loadLevel (levelName) {
  return loadJSON(`/levels/${levelName}`)
   .then(levelSpec => Promise.all([
     levelSpec,
     loadSpriteSheet(levelSpec.sprites)
   ]))
   .then(([levelSpec, sprites]) => {
     const level = new Level(levelSpec.name)

     createEntities(level)

     level.collider.set(createGrid(levelSpec.width, levelSpec.height, levelSpec.tileSize))
     level.compositor.layers.push(createBackgroundLayer(sprites))
     level.compositor.layers.push(createWallsLayer(levelSpec, level.collider.grid, sprites))
     level.compositor.layers.push(createSpritesLayer(level.entities, sprites))


     return level
   })
}


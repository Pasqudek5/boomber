import Level from "../Level.js";
import {loadJSON} from "./json.js"
import createBackgroundLayer from "../layers/backgroundLayer.js"
import {loadImage} from "./image.js";

const setupBackground = (level, levelSpec) => {
  loadImage(`/assets/backgrounds/${levelSpec.background}.png`)
   .then(background => {
     level.compositor.layers.push(createBackgroundLayer(background))
   })
}

export default function loadLevel (levelName) {
  return loadJSON(`/levels/${levelName}`)
     .then(levelSpec => {
       const level = new Level(levelSpec.name)

       setupBackground(level, levelSpec)

       return level
     })
}


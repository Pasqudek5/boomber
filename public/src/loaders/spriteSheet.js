import SpriteSheet from "../SpriteSheet.js";
import {loadImage} from "./image.js";

/* TODO: Refactor! */

export const loadSpriteSheet = (spritesSpec) =>
 Promise.all(spritesSpec.map(async ({ name, src }) => ({ img: await loadImage(src), name })))
   .then(sprites => {
     const spriteSheet = new SpriteSheet()
     sprites.forEach(({ name, img }) => {
        spriteSheet.addSprite(name, img.width, img.height, img)
      })

     return spriteSheet
   })

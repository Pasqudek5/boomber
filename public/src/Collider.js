export default class Collider {
  constructor() {
    this.grid = undefined
  }

  set(grid) {
    this.grid = grid
  }

  collide(candidate) {
    return false
  }
}
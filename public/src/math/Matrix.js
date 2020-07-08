export default class Matrix {
  constructor() {
    this.grid = []
  }

  forEach(callback) {
    this.grid.forEach((col, x) => {
      col.forEach((value, y) => {
        callback(x, y, value)
      })
    })
  }

  set(x, y, value) {
    if (!this.grid[x]) {
      this.grid[x] = []
    }

    this.grid[x][y] = value
  }

  get(x, y) {
    return this.grid[x][y]
  }
}
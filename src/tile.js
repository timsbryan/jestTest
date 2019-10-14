export default class Tile {
  constructor(colour) {
    this.colour = colour;
  }

  draw() {
    return this.colour;
  }
}
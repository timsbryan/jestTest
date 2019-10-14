'use strict';

import Tile from '../tile';
import Bin from '../bin';
jest.mock('../tile'); // tile is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Tile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  let bin = new Bin();
  bin.draw();
  expect(Tile).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(Tile).not.toHaveBeenCalled();

  const bin = new Bin();
  bin.draw();
  // Constructor should have been called again:
  expect(Tile).toHaveBeenCalledTimes(1);
});
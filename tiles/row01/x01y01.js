import { Tile } from '../../tile.js';

export default new Tile(
    "You advance through the hallway",
    null,
    {
        north: null,
        east: "The hallway blocks your path.",
        south: null,
        west: "The hallway blocks your path.",
    },
    true
);

import { Tile } from '../../tile.js';

export default new Tile(
    "EMPTY ROOM",
    null,
    {
        north: null,
        east: null,
        south: "The swamp is impassable.",
        west: "The swamp stretches endlessly westward.",
    },
    false
);

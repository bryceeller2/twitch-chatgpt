import { Tile } from '../../tile.js';

export default new Tile(
    "EMPTY ROOM",
    null,
    {
        north: null,
        east: "The swamp stretches endlessly eastward.",
        south: "The swamp is impassable.",
        west: null,
    },
    false
);

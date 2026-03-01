import { Tile } from '../../tile.js';

export default new Tile(
    "The trail disappears into a vast southern swamp.",
    null,
    {
        north: null,
        east: null,
        south: "The swamp is impassable.",
        west: "The swamp stretches endlessly westward.",
    },
    false
);

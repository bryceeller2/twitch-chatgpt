import { Tile } from '../../tile.js';

export default new Tile(
    "EMPTY ROOM",
    null,
    {
        north: "Navigation is not possible in this room.",
        east: "Navigation is not possible in this room.",
        south: "Navigation is not possible in this room.",
        west: "Navigation is not possible in this room.",
    },
    false
);

import { Tile } from '../../tile.js';

export default new Tile(
    'At the top of the staircase lies a room made entirely of marble. A waist-high sea of tightly folded scraps of paper with writing spill out into the vestibule. Partially obscured by these notes, you can read a Carving on the floor at your feet. "Sanctum of Lost Chats". You wade into the debris towards a raised pillar in the center of the room which holds a wrought-iron key. You hold onto it for later. View your inventory with the command "!items".',
    null,
    {
        north: null,
        east: "The chat messages pile up becoming denser as you move through them. You turn back to the entrance of the room before you drown.",
        south: "The chat messages pile up becoming denser as you move through them. You turn back to the entrance of the room before you drown.",
        west: "The chat messages pile up becoming denser as you move through them. You turn back to the entrance of the room before you drown.",
    },
    true
);

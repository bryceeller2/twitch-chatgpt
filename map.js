import { Tile } from './tile.js';

// gameMap[y][x] — y=0 is the north edge, y=3 is the south edge
export const gameMap = [
    // y=0 (north edge)
    [
        new Tile("A crumbling stone watchtower looms over the northern cliffs.", null, { north: "A sheer cliff face blocks your path.", east: null,                          south: null, west: "The cliff continues with no foothold." }, true),
        new Tile("The northern ridge offers a sweeping view of the land below.", null, { north: "A sheer cliff face blocks your path.", east: null,                          south: null, west: null                                    }, true),
        new Tile("A cold wind howls through a narrow mountain pass.",            null, { north: "A sheer cliff face blocks your path.", east: null,                          south: null, west: null                                    }, true),
        new Tile("The path ends at a frozen waterfall.",                         null, { north: "A sheer cliff face blocks your path.", east: "The cliff drops off sharply.", south: null, west: null                                    }, true),
    ],
    // y=1
    [
        new Tile("A dense thicket of thorns lines the western edge of the forest.", null, { north: null, east: null, south: null, west: "Impassable thorns block your way."   }, true),
        new Tile("You stand in a quiet clearing. Sunlight filters through the trees.", null, { north: null, east: null, south: null, west: null                               }, true),
        new Tile("The ruins of an old stone bridge stretch across a dry ravine.",    null, { north: null, east: null, south: null, west: null                                 }, false),
        new Tile("You are at the edge of a dark forest. A path leads westward.",     null, { north: null, east: "The forest ends at a steep drop.", south: null, west: null   }, true),
    ],
    // y=2
    [
        new Tile("A muddy trail runs along the western marshes.",                         null, { north: null, east: null, south: null, west: "The marshes are too deep to cross."    }, true),
        new Tile("The remains of an old campfire sit cold in the center of a clearing.", null, { north: null, east: null, south: null, west: null                                    }, true),
        new Tile("A shallow stream trickles through mossy rocks.",                       null, { north: null, east: null, south: null, west: null                                    }, true),
        new Tile("A twisted oak tree marks the eastern boundary of the forest.",         null, { north: null, east: "Dense brambles block the eastern path.", south: null, west: null }, true),
    ],
    // y=3 (south edge)
    [
        new Tile("The trail disappears into a vast southern swamp.", null, { north: null, east: null,                                south: "The swamp is impassable.", west: "The swamp stretches endlessly westward." }, false),
        new Tile("A mossy stone archway stands alone in a field.",   null, { north: null, east: null,                                south: "The swamp is impassable.", west: null                                      }, true),
        new Tile("Wild grass sways in the breeze at the forest's southern edge.", null, { north: null, east: null,                  south: "The swamp is impassable.", west: null                                      }, false),
        new Tile("A broken signpost marks the southern trailhead.",               null, { north: null, east: "The swamp stretches endlessly eastward.", south: "The swamp is impassable.", west: null                  }, false),
    ],
];

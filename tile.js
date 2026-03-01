export class Tile {
    constructor(description, item = null, exits = { north: null, east: null, south: null, west: null }, passable = true) {
        this.description = description;
        this.item = item;
        this.exits = exits;
        this.passable = passable
    }

    getBlockMessage(direction, userItems) {
        const dir = direction.toLowerCase();
        if (!(dir in this.exits)) return "That's not a valid direction.";

        // TODO: add item-conditional blocking logic here
        // e.g. if (this.exits[dir] && !userItems.find(i => i.itemName === "Key")) return this.exits[dir];

        return this.exits[dir] ?? null;
    }
}

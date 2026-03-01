import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadMap() {
    const tilesDir = join(__dirname, 'tiles');

    const rowFolders = readdirSync(tilesDir)
        .filter(name => /^row\d+$/.test(name))
        .sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)));

    const map = [];
    for (const rowFolder of rowFolders) {
        const rowDir = join(tilesDir, rowFolder);
        const tileFiles = readdirSync(rowDir)
            .filter(f => /^x\d+y\d+\.js$/.test(f))
            .sort((a, b) => parseInt(a.match(/^x(\d+)/)[1]) - parseInt(b.match(/^x(\d+)/)[1]));

        const row = [];
        for (const file of tileFiles) {
            const mod = await import(`./tiles/${rowFolder}/${file}`);
            row.push(mod.default);
        }
        map.push(row);
    }

    return map;
}

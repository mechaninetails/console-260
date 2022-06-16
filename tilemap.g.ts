// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1100110001010101010101010101010101010101010101020202010201010202010202020101010102040201020101020201020402010101010202020102020202020102020201010101010201010201010201010102010101010202020202020101020202020202020101020202020201010101020202020202010101010201010101010101010102010101010101020101010101010101010201010101020102010201010101020202020202010102010201020202020202020202040201010201020101010101010101020202020101020102020202010102020102010101010102010202020202020202010201020201010201010101010101020202020202020101030202020202020202020202020202010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . 2 . 2 2 . . 2 . . . 2 2 
2 2 . . . 2 . 2 2 . . 2 . . . 2 2 
2 2 . . . 2 . . . . . 2 . . . 2 2 
2 2 2 . 2 2 . 2 2 . 2 2 2 . 2 2 2 
2 . . . . . . 2 2 . . . . . . . 2 
2 . . . . . 2 2 2 2 . . . . . . 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 . 2 . 2 2 2 2 . . . . . . 2 
2 . 2 . 2 . . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . . 2 
2 . 2 . . . . 2 2 . . 2 . 2 2 2 2 
2 . 2 . . . . . . . . 2 . 2 . . 2 
2 . 2 2 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.skillmap.islandTile4,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

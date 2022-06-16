namespace SpriteKind {
    export const vc = SpriteKind.create()
    export const cmfg = SpriteKind.create()
}
let mySprite4: Sprite = null
sprites.onOverlap(SpriteKind.cmfg, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite4.destroy()
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.collectibleBlueCrystal)
})

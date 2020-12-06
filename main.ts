namespace SpriteKind {
    export const package = SpriteKind.create()
    export const button = SpriteKind.create()
    export const errorBin = SpriteKind.create()
    export const cheerioBin = SpriteKind.create()
    export const upBin = SpriteKind.create()
    export const downBin = SpriteKind.create()
    export const sideBin = SpriteKind.create()
    export const unknownBin = SpriteKind.create()
}
// Pause the game, click reset to restart the game and bring back the box
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause2 = !(pause2)
    if (true) {
        box.setVelocity(0, 0)
        box.setFlag(SpriteFlag.Ghost, true)
        box.setFlag(SpriteFlag.Invisible, true)
    } else {
        box.setFlag(SpriteFlag.Ghost, false)
        box.setFlag(SpriteFlag.Invisible, false)
        resetBox()
    }
    scene.cameraFollowSprite(monkey)
})
// Reset to initial conditions with new box and parameters for type and dimensions
function resetBox () {
    _type = randint(0, 2)
    if (_type == 0) {
        boxLength = 10
        boxWidth = 10
        boxHeight = 30
        objectMaterial = "Rubber"
        objectWeight = 1
    } else if (_type == 1) {
        boxLength = 20
        boxWidth = 20
        boxHeight = 20
        orientation = randint(0, 1)
        objectMaterial = "Porcelain"
        objectWeight = 0.2
    } else {
        boxLength = randint(10, 20)
        boxWidth = randint(10, 20)
        boxHeight = randint(10, 30)
        objectMaterial = "Unknown"
        objectWeight = randint(0, 2)
    }
    console.log(_type)
    junction1.setFlag(SpriteFlag.Ghost, false)
    blueButton.setFlag(SpriteFlag.Ghost, false)
    box.setFlag(SpriteFlag.Invisible, true)
    pause(500)
    tiles.placeOnTile(box, tiles.getTileLocation(0, 7))
    box.setFlag(SpriteFlag.Invisible, false)
    pause(200)
    box.setVelocity(25, 0)
}
/**
 * Create and place game map and objects
 */
let orientation = 0
let objectWeight = 0
let objectMaterial = ""
let boxHeight = 0
let boxWidth = 0
let boxLength = 0
let _type = 0
let junction1: Sprite = null
let blueButton: Sprite = null
let box: Sprite = null
let monkey: Sprite = null
let pause2 = false
tiles.setTilemap(tilemap`level`)
pause2 = false
monkey = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffff...............
    ...........feeeeef..............
    ..........fddddeeef.............
    .........cdfddfdeeff............
    .........cdfddfdeeddf...........
    ........cdeeddddeebdc...........
    ........cddddcddeebdc...........
    ........cccccddeeefc............
    .........fddddeeeff.............
    ..........fffffeeeef............
    ............ffeeeeeef.ff........
    ...........feefeefeef.ef........
    ..........feefeefeeef.ef........
    .........fbdfdbfbbfeffef........
    .........fddfddfddbeffff........
    ..........fffffffffffff.........
    `, SpriteKind.Player)
monkey.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(monkey)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(5, 7))
box = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f e e e f f f f f f f f f f f 
    f f f e e e f f e f e e f e e f 
    f e f f e e e f f f e e f e e f 
    f e e f f e e e f f e e f e e f 
    f e e f f f e e e f f e f e e f 
    f e e f e f f e e e f f f e e f 
    f e e f e e f f e e e f f e e f 
    f e e f e e f f f e e e f f e f 
    f e e f e e f e f f e e e f f f 
    f f f f f f f f f f f e e e f f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.package)
blueButton = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.button)
tiles.placeOnTile(blueButton, tiles.getTileLocation(8, 7))
let pinkButton = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.button)
tiles.placeOnTile(pinkButton, tiles.getTileLocation(2, 7))
junction1 = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.button)
tiles.placeOnTile(junction1, tiles.getTileLocation(4, 7))
let unknown = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.unknownBin)
tiles.placeOnTile(unknown, tiles.getTileLocation(4, 10))
let junction2 = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.Food)
tiles.placeOnTile(junction2, tiles.getTileLocation(6, 7))
let cheerio = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.cheerioBin)
tiles.placeOnTile(cheerio, tiles.getTileLocation(6, 10))
let junction3 = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.cheerioBin)
tiles.placeOnTile(junction3, tiles.getTileLocation(10, 7))
let upOrientation = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.Food)
tiles.placeOnTile(upOrientation, tiles.getTileLocation(12, 7))
let sideOrientation = sprites.create(img`
    . . . . . . . . . . . . . . . b 
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
    `, SpriteKind.sideBin)
tiles.placeOnTile(sideOrientation, tiles.getTileLocation(10, 10))
resetBox()
forever(function () {
    if (box.overlapsWith(pinkButton)) {
        pinkButton.say("Scanning...", 500)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("Weight: " + objectWeight + "                           " + "Material: " + objectMaterial, DialogLayout.Center)
        pause(1000)
    }
    if (box.overlapsWith(blueButton)) {
        blueButton.say("Scanning...", 500)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        if (orientation == 0) {
            game.showLongText("Orientation:  " + "Sideway", DialogLayout.Center)
        } else {
            game.showLongText("Orientation:  " + "Upright", DialogLayout.Center)
        }
        pause(1000)
    }
})
forever(function () {
    if (objectMaterial == "Unknown") {
        if (box.overlapsWith(junction1)) {
            box.setVelocity(0, 25)
        }
    }
    if (box.overlapsWith(unknown)) {
        box.setVelocity(0, 0)
        box.destroy(effects.spray, 500)
        unknown.say("Unknown", 2000)
        pause(2000)
        game.reset()
    }
    if (objectMaterial == "Rubber") {
        if (box.overlapsWith(junction2)) {
            box.setVelocity(0, 25)
        }
    }
    if (box.overlapsWith(cheerio)) {
        box.setVelocity(0, 0)
        box.destroy(effects.spray, 500)
        cheerio.say("Giant Cheerios!", 2000)
        pause(2000)
        game.reset()
    }
})
forever(function () {
    if (orientation == 0) {
        if (box.overlapsWith(junction3)) {
            box.setVelocity(0, 25)
        }
    }
    if (box.overlapsWith(sideOrientation)) {
        box.setVelocity(0, 0)
        box.destroy(effects.spray, 500)
        sideOrientation.say("Side Goat Figurine", 2000)
        pause(2000)
        game.reset()
    }
    if (box.overlapsWith(upOrientation)) {
        box.setVelocity(0, 0)
        box.destroy(effects.spray, 500)
        upOrientation.say("Upright Goat Figurine", 2000)
        pause(2000)
        game.reset()
    }
})

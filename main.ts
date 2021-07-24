namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const flag = SpriteKind.create()
}
function setGolfBall () {
    myGolfBall = darts.create(img`
        . 1 1 1 1 1 1 . 
        1 1 1 1 f 1 1 1 
        1 f 1 1 1 1 1 1 
        1 1 1 1 1 1 f 1 
        1 1 1 f 1 1 1 1 
        1 f 1 1 1 1 1 1 
        1 1 1 1 1 f 1 1 
        . 1 1 1 1 1 1 . 
        `, SpriteKind.Ball)
    myGolfBall.setTrace()
    myGolfBall.controlWithArrowKeys()
    scene.cameraFollowSprite(myGolfBall.sprite)
    scene.placeOnRandomTile(myGolfBall.sprite, 2)
}
scene.onHitTile(SpriteKind.Ball, 8, function (sprite) {
    if (hole >= list.length) {
        hole += 1
        setGolfCourse(hole)
        setGolfBall()
    } else {
        game.over(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.smallCrash.play()
    myGolfBall.throwDart()
    info.changeScoreBy(1)
})
function setGolfCourse (holenum: number) {
    scene.setTileMap(list[holenum - 1])
    scene.setTile(14, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c 6 . . . . . 
        . . . . c c 6 7 7 5 5 6 6 . . . 
        . . c c 6 6 6 6 7 5 5 7 c c . . 
        . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
        . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
        c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
        c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
        c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
        . c c 6 6 6 6 c 6 6 6 6 6 c c c 
        . c c 6 6 c 6 6 c 6 c 6 6 c c . 
        . . c c f f 6 6 c f f c c f . . 
        . . . . c f c c c f c f f . . . 
        . . . . . 4 f f f c . e . . . . 
        . . . . . . e e e . . 4 . . . . 
        . . . . . . . e e . e . . . . . 
        `, true)
    scene.setTile(5, img`
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, true)
    scene.setTile(8, img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 2 2 2 2 2 2 . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        `, false)
    scene.setTile(6, img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 5 8 8 8 8 8 8 8 8 8 8 8 5 8 8 
        8 8 8 8 8 8 8 8 8 8 1 8 8 8 8 8 
        8 8 8 8 8 5 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 1 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 5 8 8 8 8 1 8 8 8 8 8 8 5 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, false)
}
let myGolfBall: Dart = null
let hole = 0
let list: Image[] = []
scene.setBackgroundColor(6)
list = [img`
    e e e e e e e e e e e e e e e e e e e e 
    e . . . . . . . . . . . . . 5 . . . . e 
    e . . . . . . . . . . . . . 5 . . . . e 
    e . . . . . . . . . . . . . . . . . . e 
    e . . . . . . . . . . . . . . . . . . e 
    e . . . . . . . . 5 . 9 9 . . . . . . e 
    e . . . . . . . . 5 . 9 9 . . . . . . e 
    e 2 . . . . . . . 5 . . . . . . . . . e 
    e . . . . . . . . 5 . . . . . . . . 8 e 
    e e e e e e e e e e e e e e e e e e e e 
    `, img`
    eeeeeeeeeeeeeeeeeeeeeeee
    e....5..eeeeeeeeee.....e
    e....5...........5.....e
    e2...5...........5.....e
    e....5...........5....8e
    e................5.....e
    e................5.....e
    e......................e
    e...................555e
    e......................e
    e......................e
    e..99..................e
    e..99..........5.......e
    e..............5.......e
    e..............5.......e
    eeeeeeeeeeeeeeeeeeeeeeee
    `, img`
    eeeeeeeeeeeeeeeeeeeeeeee
    e....5..eeeeeeeeee.....e
    e....5...........5.....e
    e2...5...........5.....e
    e....5...........5....8e
    e............9...5.....e
    e........5...99..5.....e
    e........5...999.......e
    e........5...999....555e
    e........5.............e
    e........5.............e
    e..99..................e
    e..99..........5.......e
    e..............5.......e
    e..............5.......e
    eeeeeeeeeeeeeeeeeeeeeeee
    `, img`
    eeeeeeeeeeeeeeeeeeeeeeee
    e....5..e99999999999...e
    e....5....9999999999...e
    e2...5.....999999999...e
    e....5......9999999....e
    e...........999999.....e
    e.5......5...99999.....e
    e.5......5...9999......e
    e........5....99...5555e
    e........5.....9...5...e
    e........5.........5.5.e
    e..99......5..9999.5.5.e
    e..99......5.99999...5.e
    e.5555.....5.9999999.5.e
    e...........99999999.58e
    eeeeeeeeeeeeeeeeeeeeeeee
    `]
info.setScore(0)
hole = 1
setGolfCourse(hole)
setGolfBall()

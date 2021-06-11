radio.onReceivedNumber(function (receivedNumber) {
    clock += 1
})
let clock = 0
radio.setTransmitPower(1)
radio.setGroup(20)
basic.forever(function () {
    if (clock >= 8) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        clock += 1
    }
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
})
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Resistive)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})

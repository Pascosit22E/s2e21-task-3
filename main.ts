let number = 0
input.onButtonPressed(Button.A, function () {
    number = 9
    while (number >= 0) {
        basic.showNumber(number)
        number += -1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    number = 0
})
basic.forever(function () {
	
})

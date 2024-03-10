input.onButtonPressed(Button.A, function () {
    currentPixel = 0
    stopBlinking = false
})
function getRgbColor (colorName: string) {
    switch (colorName) {
        case "Red":
            return neopixel.rgb(255, 0, 0);
        case "White":
            return neopixel.rgb(255, 255, 255);
        default:
            return neopixel.rgb(0, 0, 0);  // Default to black for unknown colors
    }
}
input.onButtonPressed(Button.B, function () {
    stopBlinking = true
    console.log("LED: " + currentPixel)
console.log("Color: " + currentColor)
})
let stopBlinking = false
let currentPixel = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
// Initialize with black
let currentColor = "Black"
basic.forever(function () {
    if (!(stopBlinking)) {
        if (currentPixel % 2 == 0) {
            // Red for even numbers
            currentColor = "Red"
        } else {
            // White for odd numbers
            currentColor = "White"
        }
        strip.setPixelColor(currentPixel, getRgbColor(currentColor))
        strip.show()
        basic.pause(0.000000000000000000000000000000001)
        strip.clear()
        basic.pause(0.000000000000000000000000000000001)
        currentPixel += 1
        if (currentPixel == 8) {
            // Reset to the first pixel when the last pixel is reached
            currentPixel = 0
        }
    }
})

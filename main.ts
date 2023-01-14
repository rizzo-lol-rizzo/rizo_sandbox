led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        while (pins.digitalReadPin(DigitalPin.P5) == 1) {
            pins.digitalWritePin(DigitalPin.P10, 1)
            pins.digitalWritePin(DigitalPin.P7, 0)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        while (pins.digitalReadPin(DigitalPin.P5) == 1) {
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P7, 1)
        }
    }
})

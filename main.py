led.enable(False)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P5) == 0:
        pins.digital_write_pin(DigitalPin.P10, 0)
        pins.digital_write_pin(DigitalPin.P7, 0)
    if pins.digital_read_pin(DigitalPin.P9) == 1:
        while pins.digital_read_pin(DigitalPin.P5) == 1:
            pins.digital_write_pin(DigitalPin.P10, 1)
            pins.digital_write_pin(DigitalPin.P7, 0)
    if pins.digital_read_pin(DigitalPin.P3) == 1:
        while pins.digital_read_pin(DigitalPin.P5) == 1:
            pins.digital_write_pin(DigitalPin.P10, 0)
            pins.digital_write_pin(DigitalPin.P7, 1)
basic.forever(on_forever)

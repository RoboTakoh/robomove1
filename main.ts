input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
})
function ChangeLights (num: number, num2: number, num3: number, num4: number) {
    moveMotorZIP.setZipLedColor(0, num)
    moveMotorZIP.setZipLedColor(1, num2)
    moveMotorZIP.setZipLedColor(2, num3)
    moveMotorZIP.setZipLedColor(3, num4)
    moveMotorZIP.show()
}
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.beepHorn()
})
let distance = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
ChangeLights(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
basic.forever(function () {
    moveMotorZIP.show()
    distance = Kitronik_Move_Motor.measure()
    if (distance >= 25) {
        ChangeLights(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 150)
        distance = Kitronik_Move_Motor.measure()
    } else if (distance < 25) {
        ChangeLights(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
        Kitronik_Move_Motor.stop()
        basic.pause(100)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 30)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 30)
        basic.pause(500)
        Kitronik_Move_Motor.stop()
        basic.pause(2000)
        distance = Kitronik_Move_Motor.measure()
    } else {
        ChangeLights(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red), Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        Kitronik_Move_Motor.stop()
        distance = Kitronik_Move_Motor.measure()
    }
    basic.pause(1)
})

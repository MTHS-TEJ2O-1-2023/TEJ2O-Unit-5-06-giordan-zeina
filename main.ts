/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program a program that will tell the distance in cm to the sonar
*/

//variable
let distance: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//input
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distance = sonar.ping(
  DigitalPin.P1,
  DigitalPin.P2,
  PingUnit.Centimeters
    )
  basic.showNumber(distance)
  basic.showIcon(IconNames.Happy)
})

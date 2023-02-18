//enum will give the default value to 0 and then next is the continuous number unless indicated a value
// you can define values to each (string number or function)
const enum SeatChoice {
  AISLE , // has a value of 0
  MIDDLE=6,
  WINDOW,
  CREW ='crew'
}

const pSeat = SeatChoice.AISLE

export{}
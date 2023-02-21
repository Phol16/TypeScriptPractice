const box = <HTMLDivElement>document.querySelector('.box')
const button = <HTMLButtonElement>document.getElementById('button')
const input = <HTMLInputElement>document.getElementById('input')
const span = <HTMLSpanElement>document.querySelector('span')


button.addEventListener('click', ():void =>{
  const color:string = input.value;
  box.style.backgroundColor = color
  span.textContent = color
})
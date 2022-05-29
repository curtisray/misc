//convert from celsius to farenheit
//multiply by 9, divide by 5, and add 32

var c = prompt('Enter a value in Celsius.');

while (isNaN(c) == true){
    var c = prompt('Enter a numerical value in Celsius')
}

var f = (c * 9)/5 + 32;

console.log(f + ' degrees Farenheit.');

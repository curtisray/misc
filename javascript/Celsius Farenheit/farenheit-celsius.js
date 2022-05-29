//convert from farenheit to celsius
//subtract 32, multiply by 5, divide by 9

var f = prompt('Enter a value in Farenheit.');

while (isNaN(f) == true){
    var f = prompt('Enter a numerical value in Farenheit')
}

var c = (f - 32)* 5 / 9;

console.log(c + ' degrees Celsius.');
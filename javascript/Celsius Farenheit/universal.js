//converts freely between celsius and farenheit

//converts celsius to farenheit
function celsiusFarenheit(){
    var c = prompt('Enter a value in Celsius.');

    while (isNaN(c) == true){
        var c = prompt('Enter a numerical value in Celsius')
    }

    var f = (c * 9)/5 + 32;
    var f = (Math.round(f*10))/10;

    alert(f);
    console.log(f + ' degrees Farenheit.');
}

//converts farenheit to celsius
function farenheitCelsius() {
    var f = prompt('Enter a value in Farenheit.');

    while (isNaN(f) == true){
        var f = prompt('Enter a numerical value in Farenheit')
    }

    var c = (f - 32)* 5 / 9;
    var c = (Math.round(c*10))/10;

    alert(c);
    console.log(c + ' degrees Celsius.');
}

var input = prompt('Are you converting from Farenheit or Celsius (f/c)');

if(input === 'f'){
    farenheitCelsius()
}else{
    ;
}
if(input === 'c'){
    celsiusFarenheit()
}else{
    ;
}
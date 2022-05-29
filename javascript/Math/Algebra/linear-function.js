//create a script that takes 2 points and forms a linear function in the form y = mx + b

//find the slope

var xA = prompt('Enter the first x value');
var xB = prompt('Enter the second x value');

var yA = prompt('Enter the first y value');
var yB = prompt('Enter the second y value');

var xValue = xA - xB;
var yValue = yA - yB;

var m = (yValue/xValue);

//find the y-intercept

x = Number(xA);
y = Number(yA);

b = yA - (1.5 * xA);

alert('y = '+ m +'x + ' + b);
//obtain 2 coordinates 

var x1 = prompt('Enter the first x value');
var x2 = prompt('Enter the second x value');

var y1 = prompt('Enter the first y value');
var y2 = prompt('Enter the second y value');

var y = 0;
var x = 0;

var a = 0;
var b = 0;

function findB () {
    var y = (y1/y2);
    var x = (x1/x2);
    var b = Math.pow(y, 1/x);
}

console.log(findB);
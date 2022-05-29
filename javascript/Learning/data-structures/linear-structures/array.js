//fuction that will store all variables into an array

{ // example variables
    var x = 1;
    var y = 2;
    var z = 3;
}


function varStorage() {
    var array = [];
    
    array.push(x);
    array.push(y);
    array.push(z);

    return array;
    console.log(array);
}

function arrayOpperation() {
    var array = varStorage();
    
    array.push(array[0] * 2);
    array.push(array[1] * 2);
    array.push(array[2] * 2);
    
    return array;
    console.log(array);
}
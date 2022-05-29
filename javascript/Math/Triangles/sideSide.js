//function that takes the legs of a triangle and finds area and perimeter
function legs(){
    var sideA = Number(prompt('Enter the first leg'));
    var sideB = Number(prompt('Enter the second leg'));
    var sideC = Math.sqrt((Math.pow(sideA,2)) + (Math.pow(sideB,2)));
    
    var perimeter = sideA + sideB + sideC;
    var halfPerimeter = perimeter/2;
    var area = Math.sqrt(halfPerimeter*(halfPerimeter - sideA)*(halfPerimeter - sideB)*(halfPerimeter - sideC));
    
    var areaRounded = (Math.round(area*10)/10);

    console.log(perimiter + ' = Perimeter');
    console.log(area);

    alert(areaRounded);
}

//funtion that takes the hypotenuse and leg of a triangle to find area and perimeter
function hyp(){
    var sideC = Number(prompt('Enter the hypotenuse'));
    var sideA = Number(prompt('Enter a leg'));
    var sideB = Math.sqrt((Math.pow(sideC,2)) - (Math.pow(sideB,2)));

    var perimeter = sideA + sideB + sideC;
    var halfPerimeter = perimeter/2;
    var area = Math.sqrt(halfPerimeter *(halfPerimeter - sideA)*(halfPerimeter - sideB)*(halfPerimeter - sideC));

    var areaRounded = (Math.round(area*10)/10);

    console.log(perimeter + ' = Perimeter');
    console.log(area);

    alert(areaRounded);
}

var input = prompt('Do you know the hypotenuse?(y/n)');

if (input === null){
    Error()
}else{
    ;
}

if (input === 'n'){
    legs()
}else{
    hyp()
}
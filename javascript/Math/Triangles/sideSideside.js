//finds are given three sides
function threeSides(){
    var sideA = prompt('Enter the first side');
    var sideB = prompt('Enter the second side');
    var sideC = prompt('Enter the third side'); 

    var sideA = Number(sideA);
    var sideB = Number(sideB);
    var sideC = Number(sideC);

    console.log(sideA, sideB, sideC);
    var halfPerimeter = ((sideA + sideB + sideC)/2);
    console.log(2 * halfPerimeter + ' = Perimiter');
    console.log(halfPerimeter + ' = Half Perimeter');
    
    
    var area = Math.sqrt(halfPerimeter*(halfPerimeter - sideA)*(halfPerimeter - sideB)*(halfPerimeter - sideC));
    
    if(area > 0){
        console.log(area);
        var areaRounded = ((Math.round(area*10))/10);
        alert(areaRounded);
    }else{
        alert('Your inputs do not create a valid triangle.');
    }
    
}

threeSides();
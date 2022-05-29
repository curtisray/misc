//function that finds area, given base and height
function baseHeight(){
    var base = Number(prompt('Enter the base'));
    var height = Number(prompt('Enter the height'));
    var area = ((base*height)/2);

    var areaRounded = (Math.round(area*10)/10);

    console.log(area);
    
    alert(areaRounded);
}

//function that finds area, given 2 sides and an angle
function twoSides(){
    let sideA = prompt('Enter one side');
    let sideB = prompt('Enter a different side');
    let angle = prompt('Enter the angle');
    let trigFunc = prompt('Enter the trig function ("sin", "cos", "tan")');

    if(trigFunc.toLowerCase() === 'sin'||'sine'){
        var area = ((.5(sideA/sideB))*(Math.sin(angle)));
    }
    if(trigFunc.toLowerCase() === 'cos'||'cosine'){
        var area = ((.5(sideA/sideB))*(Math.cos(angle)));
    }
    if(trigFunc.toLowerCase() === 'tan'||'tangent'){
        var area = ((.5(sideA/sideB))*(Math.tan(angle))); 
    }

    if(trigFunc.toLowerCase() =! 'sin'||'sine'||'cos'||'cosine'||'tan'||'tangent'){
        throw 'Did not enter a valid trig function';
    }
    alert(area);
}

function sideSide() {
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
}


//start of script
var bh = prompt('Do you know the base and height? (y/n)');

if(bh === 'y'||'yes'){
    baseHeight();
}else{;}

if(bh === 'n'||'no'){
    var ts = prompt('Do you know two sides and an angle? (y/n)');
    
    if(ts === 'y'||'yes'){
        twoSides()
    }
    
    if(ts === 'n'||'no'){
        var trs = prompt('Do you know three sides? (y/n)');

        if(trs === 'yes'||'yes'){
            threeSides()
        }else{
            alert("You don't have enough information.")
        }
    }
}
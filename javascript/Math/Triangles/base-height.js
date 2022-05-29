//function that finds the area given base and height
function baseHeight(){
    var base = Number(prompt('Enter the base'));
    var height = Number(prompt('Enter the height'));
    var area = ((base*height)/2);

    var areaRounded = (Math.round(area*10)/10);

    console.log(area);
    
    alert(areaRounded);
}

baseHeight();
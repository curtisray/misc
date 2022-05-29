//main js file for the math ladder website

//script for the fortune teller button
function button() {
    var possible = {
        children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        spouse: ['wife named Maria.', 'wife named Julia.', 'wife named Alissa.', 'wife named Jennifer.', 'wife named Lauren.', 'husband named Henry.', 'husband named George.', 'husband named Tim.', 'husband named John.', 'husband named Alonzo.'],
        residence: ['San Francisco', 'New York City', 'Berlin', 'Paris', 'Amsterdam', 'Moscow', 'Dubai'],
        occupation: ['a Plumber', 'an Accountant', 'a Developer', 'an Underwear Model', 'a Teacher', 'a CTO']
    }

    var certain = {
        children: Math.floor(Math.random() * possible.children.length),

        spouse: Math.floor(Math.random() * possible.spouse.length),

        residence: Math.floor(Math.random() * possible.residence.length),

        occupation:Math.floor(Math.random() * possible.occupation.length),
    }

    var outcome = 'You will be ' +possible.occupation[certain.occupation]+ ' living in ' +possible.residence[certain.residence]+ ' with ' +possible.children[certain.children]+ ' kids and a ' +possible.spouse[certain.spouse];

    //start of script

    var newText = document.createTextNode(outcome);

    var text = document.getElementById("fortune-answer");

    while(text.innerHTML !== " ") {
        text.innerHTML = " ";
    }
    
    text.appendChild(newText);
}

//script for the first input field
//converts between celsius and farenheit
function celsiusFarenheit() {
    var input = Number(document.getElementById("input-one").innerHTML);
    var type = document.getElementById("checkbox").checked;

    while (type === true) {
        //output in farenheit
        var output = (input * 9)/5 + 32 + 'F';
    }

    while (type === false) {
        //output in celsius
        var output = (input - 32)* 5 / 9 + 'C';
    }

    var newText = document.createTextNode(output);

    var text = document.getElementById("tempt-convert-ans");

    while(text.innerHTML !== " ") {
        text.innerHTML = " ";
    }
    
    text.appendChild(newText);
}

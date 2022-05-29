/* 
    ** FOR FUTURE REFERENCE **
    
    -yo i made this in the car on the way to christmas eve

    -the date is 12/24/21 and the time is 4:06 PM

    -right now we are in "Colinga" according to my mother
*/

//function that prints a random family member
function button() {
    var familyMembers = ['Finn', 'Pippa', 'MJ', 'Tom', 'Dino', 'Matthew', 'Kathleen', 'Julianne', 'Luis', 'Soli', 'Mary Anne', 'Peter', 'Maya', 'Susanne', 'Curtis', 'Rocky Mo'];

    if (Math.round(Math.random()*100)/100 === .69){
        var output = document.createTextNode('Got Jesus?!!'); 

        var paragraph = document.createElement("p");

        paragraph.setAttribute("id", "easter-egg");

        paragraph.appendChild(output);

        document.getElementById("button").appendChild(paragraph);
    }else{
        var ranFamilyMember = Math.floor(Math.random() * familyMembers.length);

        var output = document.createTextNode('Merry Christmas ' + familyMembers[ranFamilyMember] + '!!!')

        var paragraph = document.createElement("p");

        paragraph.appendChild(output);

        document.getElementById("button").appendChild(paragraph);
    }
}

//funtion that clears button output
function buttonOutput() {
    var buttonList = document.getElementById("button");

    buttonList.remove();
}

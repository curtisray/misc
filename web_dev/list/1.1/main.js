// main js file

// primary function
//dictates action of the button
function clearInput() 
{
    var input = document.getElementById("input");
    var button = document.getElementById("input");

    // clearn the input after button press
    if (input.value != null || undefined) 
    {
        input.value = null;
    }
}
// 
function input(event)
{
    if (event.keyCode == 13)
    {
        button();
    }
    
    if (event.keyCode == 46)
    {
        console.log('d closed');
        clearOutput();
    }
}
// function is run after a button press or after an 'enter' keypress   
function button()
{
    var input = document.getElementById("input");
    var button = document.getElementById("button");
    var list = document.getElementById("list");

    var buttonStatus = false;
    var inputStatus = false;

    // new list item
    var innerInput = input.value;
    var newText = document.createTextNode(innerInput);
    var newElement = document.createElement('li');
    
    newElement.setAttribute("class", "listItem");
    newElement.appendChild(newText);

    list.appendChild(newElement);

    // clear input after each enter
    clearInput();
}

function clearOutput()
{
    console.log('delete closed');
}
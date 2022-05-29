function EnterButton() {
    //main function; adds an <li> with the text value of the input box for every press of the enter button
    var rawInput = document.getElementById("input").value;
    var newListItem = document.createElement("li");
    
    newListItem.id = "list-item";

    var newListItemText = document.createTextNode(rawInput);

    newListItem.appendChild(newListItemText);

    document.getElementById("list").appendChild(newListItem);

    var input = document.getElementById("input");

    //clears the input field after pressing enter
    if (input !== null || undefined) {
        input.value = '';
    }

    //performs the main function after releasing the enter key
    input.addEventListener("keyup", function(event){
        if (event.keystroke === 13){
            newListItem();
        }
    });
}

function DeleteButton() {
    //main function; delets item from the list
    var listItem = document.getElementById("list-item");
    listItem.remove();
}

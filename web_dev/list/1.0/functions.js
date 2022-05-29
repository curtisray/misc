function newListItem() {
    var input = document.getElementById("input").value;
    var newListItem = document.createElement("li");
    
    newListItem.id = "list-item";

    var newListItemText = document.createTextNode(input);

    newListItem.appendChild(newListItemText);

    document.getElementById("list").appendChild(newListItem);

}

function clearInput() {
    var input = document.getElementById("input");
    if (input !== null || undefined) {
        input.value = '';
    }
}

function clickOnEnter() {
    var input = document.getElementById("input");
    input.addEventListener("keyup", function(event){
        if (event.keystroke === 13){
            newListItem();
        }
    });
}

function deleteListItem() {
    var listItem = document.getElementById("list-item");
    listItem.remove();
}

const l= document.getElementsByClassName('l')[0]
let container = document.getElementById("inputContainer")
function add(){
    const newNode = l.cloneNode(true);
    newNode.childNodes[1].value="";
    container.appendChild(newNode);
}

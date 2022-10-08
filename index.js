
var list = document.getElementById("list");
var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var myButton = document.getElementById('btnSubmit');

const addName = () => {
    var p = document.createElement('p');
    p.innerHTML = fName.value + ' ' + lName.value;
    list.appendChild(p);
    fName.value = '';
    lName.value = '';
}

myButton.addEventListener("click", addName);
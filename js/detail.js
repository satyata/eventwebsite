var row=1;

var entry=document.querySelector(".entry");
entry.addEventListener("click", displayDetails);

function displayDetails(ev){
	ev.preventDefault();
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
if(name === "" || email === "" || phone === ""){
	alert("Kindly Fill all the details!");
	return false;
}
var display=document.getElementById("display");

var newRow=display.insertRow(row);

var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);

cell1.innerHTML = name;
cell2.innerHTML = email;
cell3.innerHTML = phone;
row++;
}

function fun1(id) {
    var x = document.getElementById("home");
    var y = document.getElementById("form");
    var z = document.getElementById("detail")

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";

    document.getElementById(id).style.display = "block";  
}    
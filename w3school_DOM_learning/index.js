// window.alert("Am working guys.....")

// These are functions for onclick events......
function formValidation() {
  let nameValueCheck = document.forms["myForm"]["fname"].value;
  let nameValue = document.querySelector("input").value;

  if(nameValue == "") {
    alert("Name must be filled out....");
    return false;
  }
}
// document.querySelector("input");

function inputNumVal() {
  let inputSelect = document.querySelectorAll("#numb")[0].value;
  let text;

  if(isNaN(inputSelect) || inputSelect < 1 || inputSelect > 10) {
    text = "<h1>Invalid Input Guys!</h1>";
  } else {
    text = "<h1>valid Input Guys!</h1>";
  }
  document.getElementById("valOut").innerHTML = text;
}

function visFunction() {
  let txtTarget = document.getElementById("test");
  txtTarget.style.visibility="visible";
}

// .style.visibility = "hidden ";

function hidFunction() {
  let txtTarget = document.getElementById("test");
  txtTarget.style.visibility="hidden";
}       

// These are functions for onmouseover or onmouseout

function mouseHover(ob) {
  // let text = querySelector("#dText");
  ob.style.color= "white";
  ob.textContent="TESTING MOUSEOVER..."
}

function unMouseHover(obj) {
  obj.textContent="MOUSE OVER ME!"
}
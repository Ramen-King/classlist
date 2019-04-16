window.onload = init;

function init() {
  const checkBox = document.querySelectorAll("input");
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", toggleTheme);
    console.log(checkBox[i].checked);
  }
}

function toggleTheme(event) {
  event.preventDefault();
  //const unChecked = [];
  const checkBox = document.querySelectorAll("input");
  for (let i = 0; i < checkBox.length; i++) {
  if(checkBox[i].checked){  

  }
  }
}

window.onload = init;

function init() {
  const checkBoxes = Array.from(document.querySelectorAll("input"));
    console.log(checkBoxes)
  checkBoxes.forEach(target => {
    target.addEventListener("change", toggleTheme);
  });
}

function toggleTheme(event) {
  event.preventDefault();
  const parent = this.parentNode;
  parent.classList.toggle("dark");

  const checkBoxes = Array.from(document.querySelectorAll("input"));
  const allChecked = checkBoxes.every((checkbox) => checkbox.checked);
  const allParents = Array.from(document.querySelectorAll('.col-sm-4'));
    if(allChecked){
        allParents.forEach(input => {
            input.classList.add('green')
        })
        
    }else{
        allParents.forEach(input => {
            input.classList.remove('green')
        })
    }

}


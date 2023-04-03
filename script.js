function active(){
    //the classList collection on an element gives the ability to add if it isnt there or remove if it is not with toggle
    //using this here because the function is going to be ran IN THE CONTEXT of the element
    this.classList.toggle("clickedRating");
    let next = this.nextElementSibling;
    let before = this.previousElementSibling;

    while(next) {
    next.classList.remove("clickedRating");
    next = next.nextElementSibling;
  }

    while(before){
        before.classList.remove("clickedRating");
        before = before.previousElementSibling;
    }
}
//A COLLECTION of elements.
const list = document.querySelectorAll("li");
const ratingList = document.getElementById("ratingList");
//loop over the COLLECTION to add an event handler to each of them for click
list.forEach(element => 
    element.addEventListener("click", active));

/* SUBMIT BUTTON */


let main = document.getElementById("main");
let end = document.getElementById("end");

let button = document.querySelector("button");
function submit(){
    list.forEach(function(item) {
        if(item.matches(".clickedRating")){
            main.classList.add("animate-left");
            end.classList.add("end-left");
            /* Rate Number */
            let numVal = document.getElementById("rateVal");
            numVal.textContent = item.value;
           
        }
        else{
            
            button.classList.add("submitButton");
            setTimeout(function(){ button.classList.remove("submitButton") }, 1000);
        }
        
      });
}


  
button.addEventListener("click", submit);








/* Declare variables below to save the different sections (divs) of your story*/
 
let basement = document.querySelector(".option-one");
let house = document.querySelector(".option-two");

let basementDiv = document.querySelector(".option-one-screen"); 
let houseDiv = document.querySelector(".option-two-screen");

let basementEnd= document.querySelector(".option-one-end"); 
let houseEnd= document.querySelector(".option-two-end");
//* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
basement.onclick=function(){
basementDiv.style.display="block";
basementEnd.style.display="block";

};



house.onclick=function(){
houseDiv.style.display="block";
houseEnd.style.display="block";
};








/*Javascript Functions Tutorial*/
 //It's a piece of code that does one or more actions

 function go(){         //This is the function
   alert("hi");           //This is the function
   alert("hi there");      //This is the function
 }

 go();  //This is calling the Above function. "go" is the name of it
 go();  //You can call them as many times as you like. 2 times in our case


//Functions also accept "Arguments":

function arg(name, age){       //Arguments are inside the parenthesis after "arg"
  alert(name);
  alert(age);
}

arg("matt", 27);
arg("Greg", 29);


//Return Value
function add(first, second){
  return first+second;
}
var sum = add(1, 2);
alert(sum);         //pop up box appears with number "3"

//Every function will return "undifined" Unless you give it a return value.

//Addition Function
function add(){

}

//Subtraction Function
function subtract(){

}
//multiplication Function
function multiply(){

}

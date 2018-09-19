//Arrays
var myList = ["apples", "oranges", "banans"];

myList [3] = "pineapples";

//Arrays can hold any type in JavaScript
//they can hold strings, numbers, functions, and even other Arrays


//Arrays holding a function
function go() {
  alert("hi");
}

var myList = ["apples", 12, "go"];

//Array holding an Array
var myList = ['apples', 12, ['dog', 'cat']]; //"dog" and "cat" are the second array

//Arrays have "METHODS" or "ACTIONS" that you can run on them
var myList = ['apples', 'oranges', 'bananas'];
//in console, run command myList.shift()
myList.shift() //This will output the first item in your array, so apples.
//it will also take that item Out of your Array
//so when you type myList again, it will only list oranages and bananas
var currentFruit = myList.shift()

currentFruit //type currentFruit in console
"oranges" //is the output
//enter myList again
"bananas" //all that's left in your Array

//There is also a POP Method
//It pulls the last Valie off your array and remove it
myList.pop()

/*"For Each" method:
You pass it a function. Automatically puts 2 arguments in the function for you*/
//Give you a value and index for each item.
//So it takes each value (apples, oranges, bananas) and runs each one through the function.
var myList = ["apples", "oranges", "bananas"];

myList.forEach(function(value, index) {     //For Each Method
  console.log(value, index);
})

//a more useful way of doing it would be
myList.forEach(function(value, index) {
  alert("I have "+value+" in my shopping cart")
})

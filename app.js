
// Chapter 14 - 20
// Chapter 14 (If statements nested)
// Q1
var password = prompt("enter your pasword")

if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}

// Q2
var a = 1;
var c = "Max";

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
// Q3
if (a === 1 && c === "Max") {
    alert("OK");
}

// Q4
var var1 = 10; 
var var2 = 10; 
if (var1 === var2) { 
    if (var1 <= var2) { 
        alert("Both conditions are true.");
    }
}

// Chapter 15 (Array I)
// Q1
var arr1 = []

// Q2
var arr2 =["hello world"]

// Q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// Q4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var length = alphabet.length;
alert(length);

// Q5
var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);

// Chapter 16 (Array II)
// Q1
var myArray1 = ["owais"]
myArray1.push("aman")
alert(myArray[1]);

// Q2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// Q3
var Alphabet1 = ["h", "i", "j", "k"];
Alphabet1.push(5);



// Chapter 16 (Array III)
// Q1 
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.shift("")
document.write("<br>"+sizes);

// Q2
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.unshift(18,20,22)
document.write("<br>"+sizes);

// Q3
var element = ["sir faraz"]
element.push("sir ali")
document.write("<br>"+element[0]) 

// Q4
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.splice(2,"M","L",)
document.write("<br>" + sizes)
 
// Q5
var sizes = ["S","M", "XL", "XXL", "XXXL"]
var regsizes = sizes.slice(0,3)
document.write("<br>" + regsizes)

// Q6
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,)
pets.push("cow","goat")
document.write("<br>" + pets)
 
// Q7
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,2)
document.write("<br>"+pets) 

// Q8
var pets1 = ["dog","cat","ox","duck","frog","flea"]
pets1.splice(3,2)
document.write("<br>"+pets1) 

// Chapter 17 - 20 (for Loops)
// Q1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Q2
for (var i = 0; i <= 11; i++) {
    console.log(i);
}

// Q3
for (var i = 0; i <= 4; i++) {
    console.log(i);
}

// Q4
for (var count = 0; count < 100; count++) {
    console.log(count);
}

// Q5
for (var i = 3; i > 0; i--) {
    console.log(i);
}

// Q6
var myArray = ["element1", "element2", "element3"];
var numberOfElements = myArray.length;

// Q7
var flag = true; 

// Q8
for (var i = 0; i < pets.length; i++) {
    console.log(i);
}
// Q9
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i); 
        break;    
    }
}
// Q10
var userNames = ["Alice", "Bob", "Charlie"];
var firstName = prompt("Enter first name")
var nameFound = false;
for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
        alert("Enter"); 
        nameFound = true; 
        break;
    }
}
if (nameFound) {
    alert("Please write correct user name");
}

// Q11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (matchFound) {
    alert("No match found");
}

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}




//chapter 14 - 16
// Q1
var futureStudent =[]

// Q2
var Studentname =["suleman","hasnain","owais"]

// Q3
var string =["sir Ali"]

// Q4
var number =[1 ,2 ,4]

// Q5
var bollone =[false ,true]

// Q6
var mix =["sir Faraz" , 1 ,false , "owais" ]

// Q7
var qualifications = [" ","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for(let i= 1 ;i <= 8;i++)
{
  document.write(i +")"+ qualifications[i] + "<br>" );

}
document.write("<br>")
// Q8

var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write("Score of " +students[i] + " is " + scores[i] + ". Pescentage: " + percentage + "%" +"<br>");
}









// Q9

let colors = ["Red", "Green", "Blue"];
alert("Initial array: " + colors);
let addStartColor = prompt("What color do you want to add to the beginning?");
// a.
colors.unshift(addStartColor);
alert("After adding to the beginning: " + colors);
// b.
let addEndColor = prompt("What color do you want to add to the end?");
colors.push(addEndColor);
alert("After adding to the end: " + colors);
// c.
colors.unshift("Cyan", "Magenta");
alert("After adding two more colors to the beginning: " + colors);
// d.
colors.shift();
alert("After deleting the first color: " + colors);
// e.
colors.pop();
alert("After deleting the last color: " + colors);
// f. 
var indexToAdd = parseInt(prompt("At which index do you want to add a color?"), 10);
var colorToAdd = prompt("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
alert("After adding a color at the specified index: " + colors);
// g.
var indexToDelete = parseInt(prompt("At which index do you want to start deleting colors?"), 10);
var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"), 10);
colors.splice(indexToDelete, numberOfColorsToDelete);
alert("After deleting colors from the specified index: " + colors);


// Q10
var scores = [320, 230, 480,120]
document.write("<br>Scores ao student"+scores)
scores.sort(function(a, b) {
    return a - b;
});
document.write("<br>Ordered Scores ao student"+scores)

// Q11

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<br>Cities list:<br>"+cities)
cities.splice(0,2)
cities.splice(2,1)
document.write("<br>Slected cities List:<br>"+cities) 

var arr =["this","is","my","cat"]
document.write("<br>Array: <br>" + arr)
document.write("<br>string: <br>This is my cat")



// Q13

var  queue = [];
queue.push("Keybord");
queue.push("Mouse");
queue.push("Printer");
queue.push("Moniter");
document.write("<br><br>Device:<br><br>", queue);
var firstOut = queue.shift();
document.write("<br>out:<br>", firstOut);
var secondOut = queue.shift();
document.write("<br> out:<br>", secondOut);
var thirdOut = queue.shift();
document.write("<br>out:<br>", thirdOut);
// Q14
var  stack = [];
stack.push("Keybord");
stack.push("Mouse");
stack.push("Printer");
stack.push("Moniter");
document.write("<br><br>Device:<br><br>", stack);
var lastout = stack.pop();
document.write('<br>out:<br>', lastout);
var thirdOut$ = stack.pop();
document.write('<br>out:<br>', thirdOut$);
var secondOut$ = stack.pop();
document.write('<br> out:<br>', secondOut$);
var firstOut$ = stack.pop();
document.write('<br>out:<br>', firstOut$);

// Q15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var dropdownHTML = '<select>';
for (var manufacturer of manufacturers) {
    dropdownHTML += `<option value="${manufacturer}">${manufacturer}</option>`;}
dropdownHTML += '</select>';
document.write("<br>"+dropdownHTML);



// Chapter 17 - 20
// Q1
var multiDimensionalArray = [[]];

// Q2
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
   
  ];

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j] + " ");
    }
        document.write("<br>");
}
document.write("<br>")

// Q3
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
document.write("<br>")
// Q4
var input = +prompt("Enter a number show to multiplication table")
var userinput = +prompt("Enter length multiplication table")
for (var i = 1 ; i <= userinput; i++){
    document.write(userinput + "x" + i + "=" + userinput*i + "<br>")

}

document.write("<br>")
// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] +"<br>");
   
}
for (let i = 0; i < fruits.length; i++){
    document.write("element at index "+ i + " is " +fruits[i] +"<br>")
}
document.write("<br>")


// Q6
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : ""));
}

document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : ""));
}

document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : ""));
}

document.write("<h3>Odd:</h3>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : ""));
}

document.write("<h3>Series:</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k" + (i < 20 ? ", " : ""));
}

// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("welcome to tha ABC Bakery. What do you order sir/ma'am?:");
var found = A.includes(userInput.toLowerCase());
if (found) {
    document.write(userInput + " is available at index." +2);
} else {
    document.write( "<br><br> We are sorry."+userInput +"<b>not available</b> in over bakery" );
}

// Q8

var A = [24, 53, 78, 91, 12];
var largestNumber = Math.max(...A);
document.write("<br><br>The largest number is:", largestNumber);

// Q9

var B = [24, 53, 78, 91, 12];
var largestNumber = Math.min(...B);
document.write("<br><br>The smallest number is:", largestNumber);

document.write("<br><br>")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i+",");
    }
}





// I. Variables & Datatypes

/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
*/

/*
A. Q + A
How do we assign a value to a variable? 
let x = 10
How do we change the value of a variable?
x = 20
How do we assign an existing variable to a new variable?
let y = x
Remind me, what are declare, assign, and define?
declaring a variable is to give it a new name using let const or var
assign is to give it a value using = operator
define is how something is implemented in a class function or variable
What is pseudocoding and why should you do it?
basically a non coded version of how you plan to code
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
25%
*/

/*
B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
let firstVariable 
Assign it the value of the string "Hello World"
firstVariable = "Hello World"
Change the value of this variable to some number
firstVariable = 10
Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable
Change the value of secondVariableto any string.
secondVariable = "Bye"
What is the value of firstVariable?
it is equal to the number which I entered(10). The old string value is lost
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean

let yourName = "Amir Hamza"
console.log("Hello, my name is " + yourName)
*/

/*
C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a _==_ b);
  console.log(c _==_ d);
  console.log('Name' _===_ 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
  */

/*
D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit

let animal = "COW"
if(animal.toLowerCase() === "cow") {
  console.log("mooooo")
} else {
  console.log("Hey! You're not a cow.")
}
*/

/*
E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or,
 if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 20
if(age >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}

*/


// II. Loops
/*
A.

for(let i = 0;i<=10;i++) {
    console.log(i)
}

for(let i = 10;i<=400;i++) {
    console.log(i)
}

for(let i = 12;i<=4000;i = i+3) {
    console.log(i)
}

*/

/*
B. 

for(let i = 1; i <=100;i++) {
    if(i % 2 === 0) {
        console.log(i+ ' is an even number')
    } else {
        console.log(i)
    }
}
*/

/*
C.

for(let i = 1;i<=100;i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        console.log("I found a "+ i + ". High five! Three is a crowd")
    }
    else if(i % 5 == 0) {
        console.log("I found a "+ i + ". High five!")
    } 
    else if(i % 3 == 0) {
        console.log("I found a " + i + ". Three is a crowd")
    }
}
*/

/*
D.

let bank_account = 0
for(let i = 1;i <=10;i++) {
    bank_account += i
}
console.log(bank_account) // 55

bank_account = 0
for(let i = 1;i <=100;i++) {
    bank_account += i *2
}
console.log(bank_account) // 10100
*/

// III. Arrays & Control flow

/*
A.

What are the things in an array called? elements
Do Arrays guarantee those things will be in order? yes it starts from index 0
What real-life thing could you model with an array? a list of names, grades, etc



B.

const quotes = ["Be yourself. everyone else is already taken", "Two things are infinite, the universe and human stupidity. and I'm not sure about the universe",
 "A room without books is like a body without a soul"]



C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?     randomThings[0]
Change the value of "Hello"to "World"               randomThings[2] = "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)


D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?    ourClass[2]
Change the value of "Github" to "Octocat"                       ourClass[4] = "Octocat"
Add a new element, "Cloud City" to the array                    ourClass.push("Cloud City")


E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20]
myArray.push("Aegon")
myArray.push("hi")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
console.log(myArray)




F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.


let variable = 1
if(variable < 100) {
    console.log("little number")
} else {
    console.log("big number")
}





G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".

let num = 10
if(num < 5) {
    console.log("little number")
}
else if(num > 10) {
    console.log("big number")
} else {
    console.log("monkey")
}




H.

What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1.
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

  // 2.
  kristynsCloset.splice(6,0,"raybans")
//   console.log(kristynsCloset)

  // 3.
  kristynsCloset[5] = "stained knit hat"
  console.log(kristynsCloset)

  // 4.
  console.log(thomsCloset[0][0])

  // 5.
  console.log(thomsCloset[1][1])

  // 6.
  console.log(thomsCloset[2][2])

  // 7.
  console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " +thomsCloset[1][1] +
                " and " + thomsCloset[2][2] + "!")

  // 8.
  thomsCloset[1][2] = "Footie Pajamas"
  console.log(thomsCloset)






  IV. Functions
  A.

  function greet(name) {
    return "Hello there, " + name
  }
    console.log(greet("Tom"))


  B.

  function printCool(name) {
    return name + " is cool"
}

console.log(printCool("Henry"))

   C.

function calculateCube(num) {
    return Math.pow(num, 3)
}
console.log(calculateCube(5))

   D. 

   function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < vowels.length; i++) {
        if (char.toLowerCase() === vowels[i]) {
            return true;
        }
    }
    return false;
}
console.log(isVowel("A"))


    E.

function getTwoLengths(str1, str2) {
    const arr = []
    arr.push(str1.length, str2.length)
    return arr
}

console.log(getTwoLengths("hello", "wow"))
    

    F.

function getMultipleLengths(...args) {
    const arr = []
    for(let i = 0;i<args.length;i++) {
        arr.push(args[i].length)
    }
    
    return arr
}

console.log(getMultipleLengths("hello", "wow", "testing"))


    G.

const maxOfThree = function (x, y, z) {
    let max = 0
    if (x >= y) {
        max = x
    } else {
        max = y
    }
    if (z >= max) {
        max = z
    } else {
        return max;
    }
    return max;
}
console.log(maxOfThree(6, 9, 1))


    H.

    function printLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




// Objects


// A.

let user = {
    name: "Tom",
    email: "tom1234@gmail.com",
    age: 30,
    purchased:[]
}
console.log(user)


// B.

user.email = "tom5678@yahoo.com"
user.age++

// C.

user.location = "New York"


// D.

user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs")
console.log(user.purchased[2])

// E.

user.friend = {
    name: "Grace Hooper",
    age: 85,
    location: "Texas",
    purchased: []
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring", "A latte")
console.log(user.friend.purchased[1])

// F.

for(let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i])
}

for(let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i])
}

// G.

function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}

updateUser()
console.log(user)

function oldAndLoud(person) {
    person.age++
    person.name = person.name.toUpperCase();
}

oldAndLoud(user)
console.log(user)


*/


// Cat Combinator
let cat1 = {
    name: "Joe",
    breed: "Mog",
    age: 19
}

console.log(cat1.age)
console.log(cat1.breed)

let cat2 = {
    name: "Jam",
    breed: "Siamese",
    age: 45
}

function combineCats(mama, papa) {
    return {
        name: mama.name + papa.name, 
        age: mama.age + papa.age,
        breed: mama.breed +"-" + papa.breed
    }
}

console.log(combineCats(cat1, cat2))
// console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }))





// 4. Cat brain bender


// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// console.log(combineCats(combineCats(combineCats(cat1, cat2),combineCats( combineCats(cat1, cat2)))))
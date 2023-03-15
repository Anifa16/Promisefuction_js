//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]

}
function foveritFood(foods){
    for(let personfoveritfood in foods){ //this function goes though my list and return it food items 
        let value = foods[personfoveritfood]; // this is how you bring out the value if object items in javescript 
        console.log(`${personfoveritfood}`); //here I'm telling it call my personfoveritfood key
        if (Array.isArray(value)){ // I'm checking my value are in an array with the array.array()
            for(let i =0; i < value.length;i++){ // if this true I want to go though my values with ny for loop 
               console.log(`${value[i]}`);
            }

        }
        else if(typeof value === 'object') { // this is ceching weather or not my value is a object
              for (let subkey in value[0]){ // if it is I want console.log the values string at index 0
                 console.log(`${value[0][subkey]} ($s{ubkey})`);//console.log the subkey is to check shakes object
            }
             
        }else{
            console.log(value)
        }
        
    }
}
foveritFood(person3)



//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person{
    constructor(name, age){ // I'm creating my object called person
        this.name = name    // here I'm using this. to asign my object values 
        this.age = age + 1// here I'm adding 1 to every age a user inputs 
    }
    // Use an arrow to create the printInfo method
    printInfo(){
        return `this is your ${this.name} and your age ${this.age}` // here I'm calling my fuction using the printInfo method 
    }
    // Create another arrow function for the addAge method that takes a single parameter
    addAge = (years) => {// creating a simple fuction that I use to pass in my method 
    this.age+=years  //I'm increament age by years here 
    }

} 
let person = new Person('anifa', 26) // should get anifa age 27
console.log(person.printInfo())
let person2 = new Person('Esther',28 ) // this 31
console.log(person2.printInfo())

person2.addAge(3) // I'm passing in my years 
console.log(person.printInfo())
console.log(person2.printInfo()) // 32



// Create another arrow function for the addAge method that takes a single parameter

// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
 // I will start by defining theh fuction 
 function promisefunc(a_str){ // this is the function 
    return new Promise((resolve, reject) => {
      if (a_str.length > 10) { // check the length of the string is less then 10
        resolve("Big word");
      } else {
        reject("Small word");
      }
    });
  }
  
  promisefunc("wow this string is too big")
    .then((result) => {
      console.log(result);   // this are my promise 
    })
    .catch((error) => {
      console.log(error); //catch an error is my function doe does not return anything
    });
  
    promisefunc("small word")
    .then((result) => {
      console.log(result);  // promise 2 
    })
    .catch((error) => {
      console.log(error); //catch an error is my function doe does not return anything
    });
   











// --------------------------->code war problem<
/*#Description

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

In the form:

[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]   
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"
However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) will be given.

Happy coding!*/

function animals(heads, legs) {
    let chickens = (4*heads - legs)/2;
    let cows = (legs - 2*heads)/2;
  
    if (chickens >= 0 && cows >= 0 && chickens % 1 === 0 && cows % 1 === 0) {
      return [chickens, cows];
    } else {
      return "No solutions";
    }
  }



/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/

function litres(time) {
    return Math.floor(time * 0.5)
  }


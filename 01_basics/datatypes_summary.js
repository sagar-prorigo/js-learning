//primitive data type 

// 7 types : String,Number,Boolean,Null,undefined,symbol to make any value unique ,BigInt

//Reference types/Non premetive type(data types whose reference is stored in the memory) :Arrays,Objects,Functions

//Function 

const myFunction = function(){
    console.log("My function");
}
//object
let myobj= {
name:"sagar",
age: 19,
profile:"Software engineer",
}

//Arrays
const heros = ["shaktiman", "naagraj", "doga"];
const id=Symbol('123')

console.log(typeof id)
myFunction();
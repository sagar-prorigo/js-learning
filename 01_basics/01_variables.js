const accountId = 14455
let accountEmail = "sagar.negi@gmail.com"
var accountPassword = "12345"
var accountCity = "Jaipur"

// accountId = 2 cannot change value of variable  with constant keyword 
/* 
let --> it has a block scope i.e A variable declared with let is only accessible within the block it's declared in. This includes any sub-blocks within that block
var --> A variable declared with var is accessible throughout the function it's declared in. If the variable is declared outside of a function, it's accessible globally
prefer not to use var because of issue in block scope and functional scope 
{
This is scope
}
*/

accountEmail = "hc@hc.com"
 accountPassword = "213241"

 accountCity = "Bengluru"
 let accountCity;    //as not value has been set it will be undefined.
 
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]) //it will create a table which will have the values that we have just inserted  



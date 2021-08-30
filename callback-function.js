/////////// node callback-function.js ///////////

//***We already knew we can pass array, object, string, number with parameter in function

//***But we can also pass a function with parameter in function which is called callback function

//Without Parameters
/* 
function greetings(name,message)
{
    console.log(message);
    message();
}

function morning()
{
    console.log('Hey! Good Morning');
}

greetings(morning); 
*/

//With parameters

function greetings(name,message)
{
    // console.log(message);
    message(name);
}

function morning(name)
{
    console.log('Hey! Good Morning',name);
}

function afternoon(name)
{
    console.log('Hey! Good Afternoon',name);
}

greetings('Tom',morning);
greetings('John',afternoon);
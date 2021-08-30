////////////// node array.js //////////////

//(1)Example
const num = [23, 35, 64, 30];
console.log(typeof num);
Array.isArray(num);

//(2)Example
function numbers(x, y, z)
{

}
console.log(typeof numbers);
console.log(numbers.length); //see the magic

//(3)Example
console.log(typeof null);

//***In java script except primitive stuffs everything is object

//***Now let's check pass by reference pass by value 

//Primitive Types
function letters(a, b, c)
{
    a = 300;
    b = 400;
    c = 500;
}

const num1 = 30;
const num2 = 40;
const num3 = 50;
letters(num1, num2, num3);
console.log(num1, num2, num3);

//Non-Primitive types
function roles(d, e, f)
{
    d.job = 'Driver'
}

const object = {name: 'John', job: 'Banker'};
roles(object);
console.log(object);

//Object works through by reference


///////////// (1) //////////////

/*

let a = 'Hello';
let b = a;
console.log(a, b);
a = 'Bye';
console.log(a, b);

//here b is immutable 

const x = { name: 'wolverine'};
const y = x;
console.log(x, y);

// x.name = 'deadpool';
y.name = 'deadpool';
console.log(x, y);

//Non-primitive data holds the refenrence

 */

////////////// (2) //////////////

// const x = false;
// const x = true; //Boolean
// const x = -4;
// const x = 4;
// const x = 4.5;
// const x = 'false';
// const x = '0';
// const x = ' ';
// const x = null;
// const x = parsInt('NaN'); 
// const x; //Undefined
// const x = []; //Empty array
const x = {}; //Empty object
console.log('value of', x);

if(x)
{
    console.log('Correct Statement');
}

else
{
    console.log('Wrong Statement');
}

//All negative and positive numbers are true expect zero 0, zero is alaways false

//Any string including spaces, '0' and 'false' are true except empty string, null and $NaN are empty string is always false

//[ ]Empty array is a true data

//{ }Empty object is a true data

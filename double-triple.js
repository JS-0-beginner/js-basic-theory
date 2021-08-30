/* const first = 500;
const second = '500'; */

/* const first = 1;
const second = true; */

/* const first = '1';
const second = true; */

/* const first = 0;
const second = false; */

/* const first = '0';
const second = false; */

/* const first = 'Sam';
const second = false; */

/* const first = 'John';
const second = true; */

/* const first = {name: 'John', job:'wrestler'};

const second = {name: 'John', job:'wrestler'}; */

const first = [];
const second = [];

if(first == second)
// if(first === second)
{
    console.log(true);
}
else
{
    console.log(false);
}
/* 
//(1) == operator 

(i) == operator just checks the value equality but doesn't check the data types 

(ii) under the hood, == operator converts the boolean into binary number
true = 1;
false = 0;

(ii) == operator can only detect primitive case, can't detect array and object

*/

//(2) === operator not only checks the value equality but also checks the data types strictly
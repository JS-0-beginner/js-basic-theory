//////////Undefined////////////
/* 
//(1) Variable value not assigned
const first;
console.log(first);
 */

/* 
//(2)return not assigned in function
function name(first, second) 
{
    const fullname = first + second;
}

const result = name('Jamal', 'Uddin');
console.log(result);
 */

//(3)just typed return; without returning anything 

//(4)forget to pass any parameter's value

//(5)Try to find a wrong property which doesn't exist in the selected object

//(6)Try to find a wrong index value of an array, accessing array element out of range

//(7)New and interestng

/* 
const array = ['sam', 'steve', 'john'];

delete array[1];
console.log(array);
console.log(array[1]); //In this type of case it will give undefined problem
 */

//(8)If undefined is assigned directly/explicitly then it will also give undefined

const names = undefined;
console.log(names);

//(9)Difference between null and undefined

//-null assigned explicitly, means directly assigning null value of any variable
//-undefined means those data or values which are not assigned yet




////////////// Scope /////////////////

//(2)Global scope variables can work anywhere

//// <<<<< Global Scope <<<<<  ////
const job = 'Banker';

//(1)Parameters don't work outside the Local scope

//// <<<<< Local Scope <<<<< ////
function fullName(first, last)
{
    const theName = first + last;
    // console.log(names);
    // console.log(job);

//// <<<<< Block Scope <<<<< ////
    if( theName == 'NarendraModi')
    {
        // let note = 'Go to hell Modi';
        // const note = 'Go to hell Modi';
        // var note = 'Go to hell Modi';
        note = 'Go to hell Modi';
        
    }
//// <<<<< Block Scope <<<<< ////
    console.log(note);
    return theName;
}
//// <<<<< Local Scope <<<<< ////

// const names = fullName('John','Smith');
const names = fullName('Narendra','Modi');
// console.log(names);
// console.log(job);

console.log(note); //Global Leaking line(23)

//// <<<<< Global Scope <<<<< ////


//***When var declared in block scope, then it can also work under the local scope.
//***Difference between var & let example in block scope
//***var hoisting
//java script automatically hoist the left side of 'var-type' variable declaration part with undifined value by ignoring the block scope. Just only var-type, const/let -type will not work, cause these two don't work outside the block scope.

 

for(var i=0; i<10; i++)
// for(let i=0; i<10; i++)
{

}
console.log(i);


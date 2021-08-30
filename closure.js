////////////////// Closure //////////////////

function stopWatch()
{
    let counter = 0;
    return function()
    {
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
let clock2 = stopWatch();
let clock3 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());


console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());

console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());
console.log(clock3());

console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

//If we use a function under function or return a function under a function, if that function can access any variable outside the main function then it creates it's own reference / closure for any outside variable

//that function keeps the reference of any outside variable

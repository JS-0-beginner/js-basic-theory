///// node closure-recap.js /////

/* 
const bank = owner =>
{
    balance = 0;
    return amount =>
    {
        balance += amount;
        return balance; //closure
    }
} 
*/
/* 
//return will not work with second line bracket
const bank = owner =>
{
    balance = 0;
    return 
        {
        deposit:amount =>
        {
            balance += amount;
            return balance;
        }
    }
} 
 */

const bank = owner =>
{
    balance = 0;
    return  {

        //Objects

        deposit:amount =>
        {
            balance += amount;
            return balance;
        },

        withdraw:amount =>
        {
            balance -= amount;
            return balance;
        }
    }
} 

const firstBankAmount = bank('IFIC');

//First function output
/* 
console.log(firstBankAmount(500)); 
console.log(firstBankAmount(700)); 
console.log(firstBankAmount.balance); 
console.log(firstBankAmount(900)); */

console.log(firstBankAmount.deposit(900));
console.log(firstBankAmount.deposit(9100));
console.log(firstBankAmount.deposit(1900));

console.log(firstBankAmount.withdraw(800));


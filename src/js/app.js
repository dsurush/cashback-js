const SIMPLE = 'simple';
const INCREASED = 'increased';
const SPECIAL = 'special';
let purchases = [
    {
        amount: 0,
        category: SIMPLE,
    },
    {
        amount: 0,
        category: INCREASED,
    },
    {
        amount: 0,
        category: SIMPLE,
    },
    {
        amount: 10000000000,
        category: SPECIAL
    },
];

function take_percent(amount, percent){
    let answer = amount * percent / 100;
    return answer;
}

let cashback = 0;

const SIMPLE_CASHBACK_PERCENT = 1;
const INCREASED_CASHBACK_PERCENT = 5;
const SPECIAL_CASHBACK_PERCENT = 30;
let cashback_of_one;

for(let purchase of purchases){
    if(purchase.category == SIMPLE){
        cashback_of_one = take_percent(purchase.amount, SIMPLE_CASHBACK_PERCENT);
    } else if(purchase.category == INCREASED){
        cashback_of_one = take_percent(purchase.amount, INCREASED_CASHBACK_PERCENT);
    } else if(purchase.category == SPECIAL){
        cashback_of_one = take_percent(purchase.amount, SPECIAL_CASHBACK_PERCENT);
    }
    if(cashback_of_one > 3000)
        cashback_of_one = 3000;
    cashback += cashback_of_one;
}
console.log(cashback);
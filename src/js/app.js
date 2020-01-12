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
let cashbackOfOne;

for(let purchase of purchases){
    if(purchase.category == SIMPLE){
        cashbackOfOne = take_percent(purchase.amount, SIMPLE_CASHBACK_PERCENT);
    } else if(purchase.category == INCREASED){
        cashbackOfOne = take_percent(purchase.amount, INCREASED_CASHBACK_PERCENT);
    } else if(purchase.category == SPECIAL){
        cashbackOfOne = take_percent(purchase.amount, SPECIAL_CASHBACK_PERCENT);
    }
    if(cashbackOfOne > 3000)
        cashbackOfOne = 3000;
    cashback += cashbackOfOne;
}
console.log(cashback);
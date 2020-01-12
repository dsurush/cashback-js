const SIMPLE = 'simple';
const INCREASED = 'increased';
const SPECIAL = 'special';
const purchases = [
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
        amount: 100,
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
const BORDER_CASHBACK = 3000;
let cashbackOfOne = 0;

for(const purchase of purchases){
    if(purchase.category == SIMPLE){
        cashbackOfOne += take_percent(purchase.amount, SIMPLE_CASHBACK_PERCENT);
    } else if(purchase.category == INCREASED){
        cashbackOfOne += take_percent(purchase.amount, INCREASED_CASHBACK_PERCENT);
    } else if(purchase.category == SPECIAL){
        cashbackOfOne += take_percent(purchase.amount, SPECIAL_CASHBACK_PERCENT);
    }
    
}
if(cashbackOfOne > BORDER_CASHBACK)
    cashbackOfOne = BORDER_CASHBACK;
cashback = cashbackOfOne;
console.log(cashback);
function formatMoney(amount){
    return `$ ${amount.toFixed(2)}`;
}
console.log(formatMoney(55.99))
function toRoman(a) {
    return symbolI(a);
}

function symbolI(num){
    const symbol = 'I';
    let returnSymbol = '';
    for (let i = 0; i < num; i++) {
        returnSymbol += symbol;
    }
    return returnSymbol;
}

module.exports = toRoman;
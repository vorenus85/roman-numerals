function toRoman(a) {

    if(a <= 3 ){
        return symbolI(a);
    } else {
        return 'IV';
    }

    
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
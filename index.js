function toRoman(a) {

    if(a % 5 === 0 ){
        return drawSymbol(1, 'V');
    }
    if(a === 4){
        return drawSymbol(1, 'I') + drawSymbol(1, 'V')
    }
    if(a <= 3 ){
        return drawSymbol(a, 'I');
    }

    
}

function drawSymbol(num, sym){
    const symbol = sym;
    let returnSymbol = '';
    for (let i = 0; i < num; i++) {
        returnSymbol += symbol;
    }
    return returnSymbol;
}

module.exports = toRoman;
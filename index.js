function toRoman(a) {

    const I = drawSymbol(1, 'I');
    const V = drawSymbol(1, 'V');
    const X = drawSymbol(1, 'X');
    const modulo = a % 5;
    if(a % 10 === 0 && a % 2 === 0){
        return X;
    }
    if(a % 5 === 0 ){
        return V;
    }
    if(modulo === 4){
        if (a > 5){
            return I + X;
        } else {
            return I + V;
        }
    }
    if(a > 5 ){
        return V + drawSymbol(modulo, 'I');
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
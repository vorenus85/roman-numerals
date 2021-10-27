const I = drawSymbol(1, 'I');
const V = drawSymbol(1, 'V');
const X = drawSymbol(1, 'X');
function toRoman(a) {
    const modulo = a % 5;
    const moduloTen = a % 10;
    if(modulo === 0 ){
        if(a > 15){
            return X+X;
        }
        if(a > 10){
            return X+V;
        }
        if(moduloTen === 0){
            return X;
        }
        return V;
    }

    if(modulo === 4){
        return drawModuloFourSymbols(a);
    }

    if(a > moduloTen) {
        return X + drawSymbol(modulo, 'I');
    }
    else if(a > modulo) {
        return V + drawSymbol(modulo, 'I');
    } else {
        return drawSymbol(modulo, 'I');
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

function drawModuloFourSymbols(a){
    const obj = {
        4: I+V,
        9: I+X,
        14: X+I+V,
        19: X+I+X
    }
    return obj[a];
}

module.exports = toRoman;
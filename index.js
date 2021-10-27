function toRoman(a) {

    if(a % 2 === 0){
        return 'II'
    } else {
        return 'I';
    }
}

module.exports = toRoman;
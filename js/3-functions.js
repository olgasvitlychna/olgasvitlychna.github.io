'use strict';

function multiply/* nazwa wymyslona */(param1, param2, param3)/* dodarkowe paramety */{

    let result;

    result = param1 * param2 * param3

    return result /* zwraca wartość */
}

/* to samo,ale dodawanie */

function dodawanie(param1,param2,param3) {

    let wynik;

    wynik = param1 + param2 + param3 

    return wynik
}

function dodawanie2() {
    let wynik 
    wynik = 2*2
    return wynik
}


let multyplyResult = multiply(3,9,10);
let drugieDzialanie = multiply(2,9,10);
let wynikiDodawani = dodawanie(5, 40, 50);

console.log("TCL: wynikiDodawani" , wynikiDodawani);
console.log("Wynik:multyplyResult" , multyplyResult);
console.log("Wynik:drugieDziałanie", multyplyResult);

let functionExpression = function () {
    let wynik 
    wynik = 2*2
    return wynik
};


console.log(functionExpression());


let arrowFunction = (param1,param2,param3,kolejnyparam) => {
    let wynik= param2+ param3* param1/kolejnyparam
};


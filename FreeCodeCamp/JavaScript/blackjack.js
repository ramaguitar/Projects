let count = 0;
let resultado = "";

function cc(card) {
    if(card > 1 && card < 7){
        count ++;
    }else if(card > 6 && card < 10){
        count = count;
    }else{
        count --;
    }
    if(count > 0){
        resultado = count + " " + "Bet";
    }else{
        resultado = count + " " + "Hold";
    }
    return resultado;
}
cc(2); cc(8); cc(6); cc('K'); cc(3);
console.log(resultado);

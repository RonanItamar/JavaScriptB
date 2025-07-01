var global = "Variavel Global";
console.log(global);

function exemplo2(){
    var local = "Variavel Local";
    console.log(local);
}
exemplo2();

let x = 10;
if (x > 5){
    let y = 20;
    console.log("Valor de Y: ", y);
}
console.log(x);
//console.log(y);

const _constante = "texto";
_constante = "outro texto";
console.log(_constante);

function saudacao(){
    alert('Bem vindo ao nosso site')
}
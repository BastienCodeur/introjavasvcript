// manière historique

function addition(a,b) {
    return a+ b;

}

console.log(addition(2,4));

//Utiliser une constante
//fonction anonyme
//addition est une constante qui est une reference sur une fonction
const addition2 = function (a,b) {
    return a+b;

}

console.log(addition2(2,4));

//utiliser des arrow functions (fonction flechée)
const addition3 = (a,b)=>{
    return a+b;
}

console.log(addition3(2,4));

//une seule instruction return
const addition4 = (a,b)=> a+b;

console.log(addition4(2,4));

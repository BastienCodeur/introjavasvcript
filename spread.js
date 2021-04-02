//operateur spread

const nombre = [10,20,30,40,50];

console.log(nombre);
console.log(...nombre);

//copie de tableau

const tab2 = Array.from(nombre);

const tab4 = [...nombre];

console.log(tab4);

const pairs = [2,4,6,8];

const impairs = [1,3,5,7,9];

//const nombres = pairs.concat(impairs);

const nombres = [...pairs,...impairs];

console.log(nombres);
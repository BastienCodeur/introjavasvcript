//tableau

const tab = [10,20,30,40,50];

//Parcours tableau : méthode ancienne

for (let i = 0; i<tab.length; i++){
    console.log(tab[i]);
}
console.log(tab);

//Parcours "semi-moderne" : foreach

for (let nombre of tab){
    console.log(nombre);
}

//Ajouter un élément dans le tableau (en fin de tableau=

tab.push(100);
console.log(tab);

// Copie de tableau

const tabClone = tab;
tabClone.push(500);
console.log(tab);
console.log(tabClone);

//Copie en profondeur : Shallow-copy

const tabClone2 = Array.from(tab);
const tabClone3 = tab.slice();
const tab2 = tab.slice(1,3);






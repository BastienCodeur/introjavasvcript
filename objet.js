
//objet litéral
const dupond = {
    nom : "dupond",
    prenom : "jean",
    age : 30
}

console.log(dupond);
console.log(dupond.nom);

//copie d'objet
const dupond_copie = dupond;

dupond_copie.age = 55;
console.log(dupond);
console.log(dupond_copie);

//copie en profonduer (shallow-copy)
//utilisation de l'operateur spread ...

const dupond_bis = {...dupond};

dupond_bis.age = 80;
console.log(dupond);
console.log(dupond_bis);

//copie avec un ajout d'attribut

const dupond2 = {...dupond, sexe: 'M'};
console.log(dupond2);

//copie avec modification des valeurs existantes

const dupond3 = {...dupond, age: 20};
console.log(dupond3);

//destructuring d'objet
//creation de variables à partir des champs d'un objet
const {nom,prenom} = dupond;
console.log(nom,prenom);

// destructuring d'objet avec renommage des variables
const {nom:n,prenom:p}= dupond;
console.log(n,p);

//destructuring d'objet en tant que paramètre d'une fonction
//fonction qui prend un objet en parametre et qui retourne l'identité de la personne

const getIdentity = personne =>
     personne.prenom + ' ' + personne.nom.toUpperCase();

console.log(getIdentity(dupond));

const getIdentity2 = ({nom,prenom}) =>
   prenom + ' ' + nom.toUpperCase();

console.log(getIdentity2(dupond));


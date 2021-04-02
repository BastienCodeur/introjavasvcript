//creation d'un tableau d'objet
const personnes = [
    {id:1,nom:'dupond',prenom:'jean',age:55},
    {id:2,nom:'martin',prenom:'mare',age:42},
    {id:3,nom:'paulrin',prenom:'paul',age:22},
    {id:4,nom:'michou',prenom:'marc',age:33}
]

//aficher le nom et le prenom en majuscule de chaque personne

//utilisation du foreach

personnes.forEach(personne  => console.log(personne.prenom + ' ' + personne.nom.toUpperCase() + ' '+ personne.age));

//créer un tableau qui contient l'identité (prenom NOM) de toutes
//les personnes de plus de 40 ans

const identites = personnes.filter( personne => personne.age > 40).map(personne => personne.prenom + ' ' + personne.nom.toUpperCase());
console.log(identites);
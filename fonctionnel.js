const notes = [8,6,9,2,3];


//affichage des notes
for (let note of notes){
    console.log(note);
}

//function afficherNote(note) {
    //console.log(note);

//}

//const afficherNote = note => console.log(note);

notes.forEach(note => console.log(note));

//afficherNote : fonction de callback.

//map d'un tableau
const notesSur20 = notes.map(note => note * 2);
console.log(notesSur20);


const notesSur10 = notesSur20.filter(note => note > 10);
console.log(notesSur10);

const tabNotesSur10Bis = notesSur10.map(note => note * 2).filter(note => note > 10);
console.log(tabNotesSur10Bis);
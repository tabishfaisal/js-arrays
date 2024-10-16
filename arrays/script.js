const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];
console.log(fourthTeacher); // ho stampato per verificare se funziona

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4]="Patrick"; // assegno valore Patrick a indice 4 di variable teacher per sostituirlo con carlo
console. log(teachers); // stampo per verificare se funzoine


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop(6); // uso il metodo .Pop() per rimouvere l'ultimi elemento di un array
console. log(lastTeacher); // stampo LastTeacher e teachers per vedere se funzionanno
console. log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(0); // uso il metodo .Shift() per rimuovere il primo elemento di un Array
console. log(firstTeacher); // stampo firstTeacher e teachers per vedere se funzionanno
console. log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); // usiamo il metodo .push con dentro () il elemto ad aggiungere alla fine di un array
console. log(teachers); // stampo e controlo se funziona

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = null;

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;
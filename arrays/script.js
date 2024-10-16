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
const lastTeacher = teachers.pop(); // uso il metodo .Pop() per rimouvere l'ultimi elemento di un array
console. log(lastTeacher); // stampo LastTeacher e teachers per vedere se funzionanno
console. log(teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(); // uso il metodo .Shift() per rimuovere il primo elemento di un Array
console. log(firstTeacher); // stampo firstTeacher e teachers per vedere se funzionanno
console. log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); // usiamo il metodo .push con dentro () il elemto ad aggiungere alla fine di un array
console. log(teachers); // stampo e controlo se funziona

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah"); // al opposito di metodo Shift() che si usa per rimuovere usiamo unshift() per aggiungere elemento al inizi di un Array
console. log(teachers); // stampo e controllo se funziona

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio"); // per verificare se elemento esiste nel array usiamo metodo .include() con dentro elemnto 
console. log(isFabioPresent); // stampo per verificare se funziona

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis"); // per trovare un indice usiamo indexOf()
console. log(lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(","); // su internet ho visto i metodo join per unire gli elementi e possiamo mettere virgolo in mezzo per seperargli
console. log(teachersString); // controlo con console fatto

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length; // Se il risultato era 0 in quel caso array teacher era vuoto
console. log(isTeachersEmpty);
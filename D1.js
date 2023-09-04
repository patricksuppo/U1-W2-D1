/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* La prima datatype è :
-string: è un carattere o più caratteri a cui si mette un nome,che deve essere più attinenete possile. Si scrive dopo tra le virgolette es:letdog="FIDO". Fido è la stringa 
- number: NON si scrive tra virgolette e può contere tutti i tipi di numeri 10,100,1000,10.3 ecc
-boolean: è il vslore booleano e definisce semplicemente se una cosa è vera o falsa es. AreYouSpanish=false AreYouItalian=true
-undefined: quando diciamo una variabile ma senza il un valore. es: letdog=..  in questo caso il risultato sarà undefined
-null: rappresenta l'assenza vera e propria di valore ---> se si dichaiara "null" ad un elemento si sta svuotando la scatola.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let Name="Patrick"
console.log(Name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1=12
let number2=20
console.log("somma tra 12 e 20", number1+number2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

Name="Suppo"
console.log(Name)
// Se cambio la variabile "let" in "const" mi da errore poichè la prima è una variabile e quindi phò essere mofificata la seconda essendo una costante non può avere nessuna modifica.



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number4=4
console.log("sottrazione tra x e 4", x - number4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="john"
let name2="John"
console.log(name1===name2)
name1=name1.toLowerCase();
name2=name2.toLowerCase();
console.log(name1===name2)

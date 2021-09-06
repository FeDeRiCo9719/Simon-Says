/*
1. Un alert() espone 5 numeri generati casualmente.
2. Da li parte un timer di 30 secondi.
3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// 1. Un alert() espone 5 numeri generati casualmente => ciclo for * 5 (math.random) all'interno di un alert => salvare la lista di numeri in un array
var array1 = [];

for (var i = 0; i<5; i++) {
    var Num = Math.floor(Math.random() * 100)+1;
    array1.push(Num); 
    alert(Num);
}
console.log(array1);


// 2. Da li parte un timer di 30 secondi 
var secondi = 3;

var array2 = []

var timer = setInterval(function() {

    document.getElementById("Timer").innerHTML = secondi;
    secondi--;

    if ( secondi == -1 ) {
        clearInterval(timer);

        // 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
        for (var i = 0; i<5; i++) {
        var number = parseInt(prompt("Inserisci il numero corrispondente"));
        console.log(number);
        array2.push(number); 
        }

        console.log(array1);
        console.log(array2);



        if ( array1 == array2 ) {
            alert("Bravo!");
        }
    }

},1000);





// // 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
// for (var i = 0; i<5; i++) {
//     var number = parseInt(prompt("Inserisci il numero corrispondente"));
//     console.log(number);
//     array2.push(number); 
//     // alert(number);
// }

// // 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// // (switch => per confrontare singolarmente i valori dei due array)
// if ( array1 == array2 ) {
//     alert("Bravo!");
// } else {
//     alert("no...");
// }
/*
1. Un alert() espone 5 numeri generati casualmente.
2. Da li parte un timer di 30 secondi.
3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// 1. Un alert() espone 5 numeri generati casualmente => ciclo for * 5 (math.random) all'interno di un alert => salvare la lista di numeri in un array
var array1 = [];

for (var i = 0; i<5; i++) {
    var Num = Math.floor(Math.random() * 10)+1;
    array1.push(Num); 
    alert(Num);
}


// 2. Da li parte un timer di 30 secondi 
var secondi = 5;
var array2 = []

var timer = setInterval(function() {

    document.getElementById("Timer").innerHTML = secondi;
    secondi--;

    if ( secondi == -1 ) {

        document.getElementById("Timer").innerHTML = "";
        clearInterval(timer);


        // 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
        for (var i = 0; i<5; i++) {
        var number = parseInt(prompt("Inserisci il numero corrispondente"));
        // controllo inserimento dato
        while ( isNaN(number) ) {
            alert("Error");
            number = parseInt(prompt("Inserisci il numero corrispondente"));
        }
        array2.push(number); 
        }

        console.log(array1);
        console.log(array2);


        // 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
        document.getElementById("Risultato").innerHTML = ``;
        var arrayFiltered = [];

        // controllo singoli elementi dei due array
        for ( i=0; i<5; i++ ) {

            if ( array1[i] == array2[i] ) {
                document.getElementById("Risultato").innerHTML += `Corretto! Il numero da te inserito è ${array2[i]} <br>`;
                arrayFiltered.push(array2[i])
                
            } else {
                document.getElementById("Risultato").innerHTML += `Errato! Il numero da te inserito è ${array2[i]} <br>`;
            }
        }

        // controllo finale
        if ( arrayFiltered.length == 5 ) {
            document.getElementById("Risultato").innerHTML += `Bravo! Li hai indovinati tutti!`;
        } else if (arrayFiltered.length == 0 ) {
            document.getElementById("Risultato").innerHTML += `Mi dispiace, non ne hai indovinato nemmeno uno!`;
        } else {
            document.getElementById("Risultato").innerHTML += `Hai indovinato ${arrayFiltered.length} numeri/o`;
        }
    }

},1000);
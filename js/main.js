/*
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

    1. Genero 16 numeri random diversi da 1...100
        1.1 Creo un array vuoto
        1.2 Inserisco i numeri delle bombe nell'array
    2. Selectione utente
        2.1 Creo un array vuoto per i tentativi
        2.2 Chiediamo un numero da 1...100
    3. Logica del gioco
        - Ripetizione del numero
            -Il numero inserito è incluso nell'array dei numeri inseriti
        - Prendo una bomba
            -Il numero inserito è incluso nell'array delle bombe
        - Inserire il numero nell'array dei numeri inseriti
        - Se lunghezza numeri inseriti è uguale alla lunghezza massima hai vinto
    ULTIMO. Gestione errori
        1. Numero >= 1 e numero <= 100
        2. Numero deve essere un NUMERO

        val1    val2    &&
        true    true    true
        false   true    false
        true    false   false
        false   false   false

        val1    val2    &&
        1       1       1
        1       0       0
        0       1       0
        0       0       0
*/

// var dimensioneCampo = 100; // scelta statica
var dimensioneCampo = sceltaDifficolta(); // scelta con funzione
var totaleMine = 16;
var bandierineMax = dimensioneCampo - totaleMine;

var posizioneMine = minaIlCampo(dimensioneCampo, totaleMine);
console.log(posizioneMine);
var bandierinePiazzate = [];

var boom = false;
while ((bandierinePiazzate.length < bandierineMax) && (boom === false)) {
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numeri da 1 a ' + dimensioneCampo));
    if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) {
        if (!posizioneMine.includes(bandierinaDaPiazzare)) {
            bandierinePiazzate.push(bandierinaDaPiazzare);
            if (bandierinePiazzate.length == bandierineMax) {
                alert('Vai a giocare al Superenalotto');
            } else {
                alert('Hai piazzato una bandierina');
            }
        } else {
            alert('BOOOM!! hai beccato una bomba! Hai piazzato ' + bandierinePiazzate.length + ' bandierine');
            boom = true;
        }
    } else {
        alert('Hai già inserito questo numero');
    }
}

function sceltaDifficolta() {
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3'));
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function minaIlCampo(dimCampo, totMine) {
    var posizMine = [];
    while (posizMine.length < totMine) {
        var minaDaPiazzare = generaRandomMinMax(1, dimCampo);
        if (!posizMine.includes(minaDaPiazzare)) {
            posizMine.push(minaDaPiazzare);
        }
    }
    return posizMine;
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

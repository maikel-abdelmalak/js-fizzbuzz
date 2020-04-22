//chiedo un numero all'utente
var numero_utente = prompt ('inserisci un numero');

//con un ciclo for partendo da 1 fino a numero_utente per ogni numero
for (var i=1; i<=numero_utente; i++){

    //calcolo resto divisione per tre
    var resto3 = i % 3;

    //calcolo resto divisione per cinque
    var resto5 = i % 5;

    //se il numero è divisibile per tre e cinque stampo FizzBuzz
    if(resto3 == 0 && resto5 == 0){
        console.log(i + '  FizzBuzz');
    }//se è divisibile solo per tre stampo Buzz
        else if (resto3 == 0 && resto5 != 0) {
            console.log(i + '  Buzz');
    }//se è divisibile solo per cinque stampo Fizz
        else if (resto3 != 0 && resto5 == 0) {
            console.log(i + '  Fizz');
    } //altrimenti stampo solo il numero
        else {
            console.log(i + '  ' + i);
    }
}

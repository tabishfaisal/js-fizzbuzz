//Scrivi un programma che stampi i numeri da 1 a 100
// ma per multipli di 3 stampi “Fizz” al posto del numero 
// per multipli di 5 stampi Buzz. 
//Per i numeri che sono multipli di 3 e 5, stampa FizzBuzz.

// stampiamo i numeri da 1 a 100
for(let i=0; i<100; i++){
    let num = i+1
    if(num%3===0 && num%5===0){ // metto la condizione usando operatore methodo
        console.log("FizzBuzz");
    } else if (num%3===0){ // faccio stampare Fizz al posto dei numeri multipli di 3
        console.log("Fizz");
    } else if(num%5===0){ // faccio stampare buzz al posto dei numeri multipli di 5
        console.log("Buzz");
    } else { // faccio stampare tutti i numeri naturali 
        console.log(num);
    }
}

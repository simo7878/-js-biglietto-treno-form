//il programma chiede quanti km intente percorrere il passeggero
//il programma chiede al passegero la sua età
//il prezzo del TKT è calcolato in base ai Km percorsi (0.2€ al km)
//discounts
// tariffa giovani
//tariffa senior
var kmDaPercorrere = parseInt(prompt('Quanti kilometri intende percorrere?'));
console.log(kmDaPercorrere);


var etaUtente = parseInt(prompt('quanti anni ha?'));
console.log(etaUtente);


var priceKm = 0.21;
var tktPrice = kmDaPercorrere * priceKm;
console.log(tktPrice);

//discounts
// tariffa giovani
var rateYoung = (tktPrice * 20 / 100);
console.log(rateYoung);

var messaggio;

if (etaUtente < 18) {
  tktPrice = tktPrice - ((tktPrice * 20) / 100);
  messaggio: 'Puoi usufruire della tariffa giovani. Il costo del tuo biglietto è:' + tktPrice + '€';
}
else if (etaUtente > 65) {
  tktPrice = tktPrice - ((tktPrice * 40) / 100);
  messaggio: 'Puoi usufruire della tariffa senior. Il costo del tuo biglietto è:' + tktPrice + '€';
}
else {
messaggio:  'Il costo del tuo biglietto è:' + tktPrice + '€';
}

//il programma chiede quanti km intente percorrere il passeggero
//il programma chiede al passegero la sua età
//il prezzo del TKT è calcolato in base ai Km percorsi (0.2€ al km)
//discounts
// tariffa giovani
//tariffa senior
var buttonGenera = document.getElementById('km')
buttonGenera.addEventListener('click',
  function() {
    var nomeInput = getElementById('nome_utente')
    var nomeInput = nomeInput.value;
    console.log(nome);

    var inputKm = document.getElementById('km')
    var kmDaPercorrere = parseint(inputKm.value);
    console.log(kmDaPercorrere);

    var fasciaEtaSelect = getElementById('fascia_eta');
    var fascia = fasciaEtaSelect.value;
    console.log(fascia);

    var priceKm = 0.21;
    var tktPrice = kmDaPercorrere * priceKm;
    console.log(tktPrice);




    if (fascia == 'minorenne') {
      tktPrice = tktPrice - ((tktPrice * 20) / 100);
    }
    else if (fascia == 'over65') {
      tktPrice = tktPrice - ((tktPrice * 40) / 100);
    }

    document.getElementById('nome_passeggero').innerHTML = nome;

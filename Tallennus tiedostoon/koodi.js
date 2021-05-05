/*Luodaan muuttujat syötetyille arvolle sekä avaimelle ja tallennetaan ne sitten
paikalliseen varastoon*/
function tallennus() {

var avain = document.getElementById("");
var arvo = document.getElementById("");
var avaimenarvo = avain.value;
var arvonarvo = arvo.value;
var nappieka = document.getElementById("");
var syottoeka = document.getElementById("");

if (avaimenarvo && arvonarvo) {
  localStorage.setItem(avaimenarvo,arvonarvo);
lue();
  }
}
/*Seuraavaksi haetaan avain ja arvo ja näytetään ne käyttäjälle
inputtien alla listassa jossa aikaraja 10 sekuntia jonka jälkeen
lista katoaa*/
function lue() {
for (var j = 0; j < localStorage.length; j++) {
    let avain = localStorage.key(j);
    let arvo = localStorage.getitem(avaimenarvo);
    syottoeka.innerHTML += "<b>"+avain + "</b>: &emsp;" + arvo
    + "&emsp;<button type='button' id=" + avain + " onclick='poista(this)'>Poista tieto</button>"+ "<br/>";
    document.getElementById("").value = "";
    document.getElementById("").value = "";
    setTimeout(function(){ syottoeka.innerHTML = ""; }, 10000);
  }
}
/*Seuraava ja viimeinen functio on avaimen ja arvon poistaminen
tästä listasta joka tapahtuu seuraavasti:*/
function poisto(teksti){
  let avaimenarvo = teksti.id;
localStorage.removeItem(avaimenarvo);
location.reload();
}

function tarkistus(form) {
//Määritetään muuttujat ja annetaan niille arvot
var etunimi = document.getElementById("nimi").value;
var sähköposti = document.getElementById("sposti").value;
var salasana = document.getElementById("salasana").value;
var palauteruutu = document.getElementById("palaute").value;
var pallukat = document.getElementById("kysymys1").value;
var checkboksit = document.getElementById("kysymys2").value;
//Etunimen tarkistus
if(etunimi.length < 3) {
  alert("Anna vähintään 3 merkkinen etunimi");
    form.nimi.focus();
    return false;
  }
  //Sähköpostin tarkistus
var ehdot = /\S+@\S+/;
  if(!ehdot.test(sposti))
  {
    alert("Anna kunnon sähköposti");
    form.email.focus();
    return false;
  }
  //salasanan tarkistus
if(salasana.length < 5) {
  alert ("Anna kunnollinen salasana");
  form.salasana.focus();
  return false;
}
//Radio nappien tarkistus
var tollanen = false;
for(var i = 0; i < pallukat.length; i++) {
  if(pallukat[i].checked == true) {
    tollanen = true;
  }
}
if(tollane == false) {
  alert("Et ole valinnut yhtäkään pallukkaa!");
  return false;
}
//checkboksien tarkistus
var checkbox = false;
for(var j = 0; j < checkboksit.length; j++) {
  if(checkboksit[j].checked == true) {
    checkbox = true;
  }
}
if(checkbox == false) {
  alert("Et ole valinnut yhtäkään checkboxia")
  return false;
}
//palautekentän tarkistus
if(palaute.length < 15) {
  alert("Sinun pitää kirjoittaa tähän palautekenttään vähintään 15 kirjainta");
  form.palaute.focus();
  return false;
  else {
    alert("Kiitos kun täytit meidän lomakkeen!")
  }
}
//Lomakkeen tyhjennys (ehkä jopa toimii)
function tyhjenna(lomake) {
  var clean = lomake.value;
    if(!confirm("Oletko nyt aivan varma tästä?")) {
      return false;
    }
  }
}

function tarkistus(form) {
//Määritetään muuttujat ja annetaan niille arvot
var etunimi = document.getElementById("enimi").value;
var sähköposti = document.getElementById("sposti").value;
var salainensana = document.getElementById("salasana").value;
var palauteruutu = document.getElementById("palaute").value;
var pallukat = document.getElementById("kysymys1").value;
var checkboksit = document.getElementById("kysymys2").value;
//Etunimen tarkistus
if(etunimi.length < 3) {
  alert("Anna vähintään 3 merkkinen etunimi");
    form.etunimi.focus();
    return false;
  }
  //Sähköpostin tarkistus
var ehdot = /\S+@\S+/;
  if(!ehdot.test(sähköposti))
  {
    alert("Anna kunnon sähköposti");
    form.sähköposti.focus();
    return false;
  }
  //salasanan tarkistus
if(salasana.length < 5) {
  alert ("Anna kunnollinen salasana");
  form.salainensana.focus();
  return false;
}
//Radio nappien tarkistus
var tollanen = false;
for(var i = 0; i < kysymys1.length; i++) {
  if(kysymys1[i].checked == true) {
    tollanen = true;
  }
}
if(tollanen == false) {
  alert("Et ole valinnut yhtäkään pallukkaa!");
  return false;
}
//checkboksien tarkistus
var checkbox = false;
for(var j = 0; j < kysymys2.length; j++) {
  if(kysymys2[j].checked == true) {
    checkbox = true;
  }
}
if(checkbox == false) {
  alert("Et ole valinnut yhtäkään checkboxia")
  return false;
}
//palautekentän tarkistus
if(palauteruutu.length < 15) {
  alert("Sinun pitää kirjoittaa tähän palautekenttään vähintään 15 kirjainta");
  form.palauteruutu.focus();
  return false;

if (document.getElementByClass("Send").onclick) {

  alert("Kiitos kun täytit meidän lomakkeen!")
}
//Lomakkeen tyhjennys (ehkä jopa toimii)
function tyhjenna(lomake) {
  var clean = lomake.value;
    if(!confirm("Oletko nyt aivan varma tästä?")) {
      return false;
      }
    }
  }
}

function OnCLickEvent() {
  //Otaa id
  var TextBox1 = document.getElementById("TextBox1");
  var TextBox2 = document.getElementById("TextBox2");
  var TextBox3 = document.getElementById("TextBox3");
  var Button1 = document.getElementById("Button1");
  var checkbox1 = document.getElementById("checkbox1");
  //Tämä katsoo jos olet kirjoitanut mitään
  if (TextBox1.value == "") {
    alert("Et ole kirjoitanut mitään käyttäjätunnusta");
  } else if (TextBox2.value == "") {
    alert("Et ole kirjoitanut mitään Salasanaa");
  } else if (TextBox3.value == "") {
    alert("Et ole kirjoitanut mitään Sähköpostia");
  } else {
    if (checkbox1.checked == true) {
      //qe
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
    //palautekentän tarkistus
    var palauteruutu = document.getElementById("palaute").value;
    if(palauteruutu.length < 15) {
      alert("Sinun pitää kirjoittaa tähän palautekenttään vähintään 15 kirjainta");
      form.palauteruutu.focus();
      return false;
      }
  }
}

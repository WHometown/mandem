var joo = "";
  var luku = "";
    var array = ["+","*","/",".","-"];
      var indeksi = 0;

function munfunktio(joo)
{
  luku+= joo;
    document.getElementById("vastaus").innerHTML = luku;
}

function laskeminen()
{
var index, laskut
 if(luku.search("%") > 0)
 {
   laskut = joo.split("%");
   luku = laskut[0] * laskut[1] / 100;
   document.getElementById("vastaus").innerHTML = luku;
 }
 else
 {
   document.getElementById("vastaus").innerHTML = eval(luku);
   luku = eval(luku);
 }
}

function clearAll()
{
  luku = "";
  document.getElementById("vastaus").innerHTML = luku;
}

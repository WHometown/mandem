var arvo = Math.floor(Math.random()*10)+1;
  var yritykset = 0;


function alusta()
  {
    var jöö = '';

    for(var i = 1; i <=10; i++)
    {
      for(var j = 0; j < 3; j++)
      {
        jöö += '<button class= "nayta" type="button" name="' + i +'" onclick="arvaa(this)" value = '+i+'>'+i+'</button>';
        if(i < 10 && j != 2)
        {
          i++;
        }
        else {
          j=3;
        }
      }
    }
    document.getElementById("Demo").innerHTML = jöö;
    alert("Valitse alta numero, peli kertoo onko se liian pieni tai suuri! Peliin on vain 3 arvausyritystä. Onnea peliin!");
}


  function arvaa(arpa)
  {
    yritykset++;
    var arvaus = arpa.value;
    if(yritykset <= 3)
    {
      if(arvaus < arvo)
      {
        alert('Valitsit liian pienen numeron');
        var x = '';
        for(var luvut = 1; luvut < arvaus; luvut++)
        {
          x = document.getElementsByName('' + luvut+ '');
          console.log(x);
          x.style.nayta = "none";
        }
      }
      else if(arvaus > arvo)
      {
        alert('Valitsit liian suuren numeron');
      }
      else if (arvaus == arvo){
        alert("Oikein, käytit " + yritykset + " kertaa" + " Pelaa uudelleen päivittämällä sivu!");
    }
  }
}

function refresh() {
  location.reload();
}

  var toccodiv = document.getElementById("primascritta");
var tocchi = 10;
var tocchisecondi = 10;
var scrittaconteggio =  document.getElementById("conteggio")
var sfera1oggetto =  document.getElementById("sphere1")
var sfera2oggetto =  document.getElementById("sphere2")
var dendelionoggetto =  document.getElementById("dendelionfinal")
var wecan =  document.getElementById("ultimascritta")


$("#conteggio").text("Go out of the bubble! " + tocchi + " tap missing");

  sfera1oggetto.onclick = function() {
    tocchi -= 1;
    tocchisecondi -=1;
    $("#conteggio").text(tocchi +  "tap missing");
     $('#sphere1').addClass("riduceopacità1");

    if (tocchi == 0) {
    document.getElementById("primascritta").remove();
    sfera1oggetto.remove();
    $("#conteggio").text("sei uscito dalla bolla");
  }

else if (tocchi == 8) {
  $("#sphere1").removeClass("riduceopacità1");
$('#sphere1').addClass("riduceopacità2")
}

else if (tocchi == 7) {
  $("#sphere1").removeClass("riduceopacità2");
$('#sphere1').addClass("riduceopacità3")
}

else if (tocchi == 6) {
  $("#sphere1").removeClass("riduceopacità3");
$('#sphere1').addClass("riduceopacità4")
}



  else if (tocchi == 5) {
$("#primascritta").text("What? Dendelions? ")
sfera1oggetto.remove();
sfera2oggetto.style.display = "block";
tocchisecondi == 5;
  }

  }
  //qui finisce il primo turno

  sfera2oggetto.onclick = function() {
    tocchisecondi -= 1;
    tocchi -= 1;
    $("#conteggio").text(tocchisecondi + " tap missing");
     $('#sphere2').addClass("riduceopacità1");

     if (tocchisecondi == 0 ) {
     //document.getElementById("primascritta").remove();
     //sfera2oggetto.remove();
     //dendelionoggetto.style.display = "block";
     //$("#conteggio").remove();
      //wecan.style.display = "block";
      window.location.href = "file2.html"
   }

    else if (tocchi == 4) {
      $("#sphere2").removeClass("riduceopacità1");
    $('#sphere2').addClass("riduceopacità2")
    }

    else if (tocchi == 3) {
      $("#sphere2").removeClass("riduceopacità2");
    $('#sphere2').addClass("riduceopacità3")
    }

    else if (tocchi == 2) {
      $("#sphere2").removeClass("riduceopacità3");
    $('#sphere2').addClass("riduceopacità4")
    }

}

function tulokset () {
    let kaikkiTulokset = 0;
    let vastaus1 = Number(document.getElementById("answer1").value);
    let vastaus2 = Number(document.getElementById("answer2").value);
    let vastaus3 = Number(document.getElementById("answer3").value);
    let vastaus4 = Number(document.getElementById("answer4").value);
    let vastaus5 = Number(document.getElementById("answer5").value);

    if (vastaus1 == 12) {
        document.getElementById("oikein1").innerHTML = "Oikein!";
        kaikkiTulokset++;
    } else {
        document.getElementById("oikein1").innerHTML = "Väärin!";
    }

    if (vastaus2 == 2300) {
        document.getElementById("oikein2").innerHTML = "Oikein!";
        kaikkiTulokset++;
    } else {
        document.getElementById("oikein2").innerHTML = "Väärin!";
    }

    if (vastaus3 == 45) {
        document.getElementById("oikein3").innerHTML = "Oikein!";
        kaikkiTulokset++;
    } else {
        document.getElementById("oikein3").innerHTML = "Väärin!";
    }

    if (vastaus4 == 25) {
        document.getElementById("oikein4").innerHTML = "Oikein!";
        kaikkiTulokset++;

    } else {
        document.getElementById("oikein4").innerHTML = "Väärin!";
    }
 
    if (vastaus5 == 52) {
        document.getElementById("oikein5").innerHTML = "Oikein!";
        kaikkiTulokset++;
    } else {
        document.getElementById("oikein5").innerHTML = "Väärin!";
    }

    if (kaikkiTulokset >= 3) {
        document.getElementById("palaute").innerHTML = kaikkiTulokset + " oikein! Olet muistanut tehdä läksyt!";
    } else {
        document.getElementById("palaute").innerHTML = kaikkiTulokset + " oikein.. Kannattasko tehdät läksyt?";
    }
}
function check() {
    // Tehdään käyttäjän tulokselle muuttuja

    var score = 0;

    // Oikeat vastaukset

    document.getElementById("right1").style.backgroundColor = "lightgreen";
    document.getElementById("right2").style.backgroundColor = "lightgreen";
    document.getElementById("right3").style.backgroundColor = "lightgreen";
    document.getElementById("right4").style.backgroundColor = "lightgreen";
    document.getElementById("right5").style.backgroundColor = "lightgreen";

    // Lisätään vastausten selostukset

    document.getElementById("info1").textContent = "Oikea vastaus on Ranska."

    // Lähde: https://www.youtube.com/watch?v=rCVqQ8NKU2M

    if (document.getElementById("answer2").checked) {
        score++;
    }

    if (document.getElementById("answer8").checked) {
        score++;
    }

    if (document.getElementById("answer9").checked) {
        score++;
    }
    
    if (document.getElementById("answer15").checked) {
        score++;
    }

    if (document.getElementById("answer17").checked) {
        score++;
    }

    // Palaute käyttäjälle
    
    if (score === 5) {
        document.getElementById("result").innerHTML =  "Hienoa, sait kaikki viisi vastausta oikein!";
        return;
    }

    if (score === 4) {
        document.getElementById("result").innerHTML =  "Hienoa, sait 4/5 oikein!";
        return;
    }

    if (score === 3) {
        document.getElementById("result").innerHTML =  "Hyvä suoritus, sait 3/5 oikein.";
        return;
    }

    if (score === 2 ) {
        document.getElementById("result").innerHTML = "Sait 2/5 oikein, vielä jäi parannettavaa ensi kerralle.";
        return;
    }

    if (score === 1 ) {
        document.getElementById("result").innerHTML = "Sait 1/5 oikein, vielä jäi parannettavaa ensi kerralle.";
        return;
    }

   else {
       document.getElementById("result").innerHTML = "Tällä kertaa ei mennyt yhtään vastausta oikein.";
   }


}
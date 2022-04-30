function check() {
    // Tehdään käyttäjän tulokselle muuttuja

    var score = 0;

    // Oikeat vastaukset

    const rightAnswers = ["answer2", "answer8", "answer9", "answer15", "answer17"]

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
    
    if (score >= 5) {
        var gold = "";
        gold.src = "./images/gold.png";
        document.getElementById("result").innerHTML =  "gold" + "HIENOA, SAIT KAIKKI VASTAUKSET OIKEIN!";
    }

    if (score >= 3 ) {
        document.getElementById("result").innerHTML = "HYVÄ SUORITUS!"
    }

   else {
       document.getElementById("result").innerHTML = "VIELÄ JÄI PARANNETTAVAA ENSI KERRALLE!"
   }

    
}
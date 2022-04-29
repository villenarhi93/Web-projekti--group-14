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
        document.getElementById("result").innerHTML = "HIENOA!"
    }

    if (score >= 4 ) {
        document.getElementById("result").innerHTML = "HYVÄ!"
    }

    if (score >= 3) {
        document.getElementById("result").innerHTML = "VIELÄ JÄI PARANNETTAVAA ENSI KERRALLE!"
    }

    if (score >= 1) {
        document.getElementById("result").innerHTML = "PAREMPI ONNI ENSI KERRALLA!"
    }
}
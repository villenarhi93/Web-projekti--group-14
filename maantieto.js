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

    document.getElementById("info1").textContent = "Oikea vastaus on Ranska. Ranska on valtio, joka koostuu Länsi-Euroopassa sijaitsevasta ydinalueesta sekä useista merentakaisista alueista. Merentakaiset alueet mukaan luettuna Ranskan pinta-ala on 643 801 neliökilometriä ja väkiluku on noin 67,5 miljoonaa. Ranskan eurooppalainen ydinalue, jota kutsutaan termillä France métropolitaine, sijaitsee lauhkealla ilmastovyöhykkeellä lukuun ottamatta aivan eteläisintä seutua, jossa vallitsee välimerenilmasto. Euroopan Ranskan pinta-ala on 551 500 neliökilometriä, joten se on maanosansa kolmanneksi laajin valtio Venäjän ja Ukrainan jälkeen.";
    document.getElementById("info2").textContent = "Oikea vastaus on Belgia. Belgian kuningaskunta eli Belgia on länsieurooppalainen liittovaltio. Sen naapurimaat ovat Ranska, Saksa, Alankomaat ja Luxemburg. Belgian pääkaupunki on Bryssel, jossa sijaitsee myös huomattava osa Euroopan unionin keskushallinnosta. Belgian pinta-ala on noin 30 500 neliökilometriä ja asukasluku on 10,4 miljoonaa. Asukkaista suurin osa on katolilaisia. Belgia on jakautunut kahteen merkittävään kieliyhteisöön, pohjoiseen hollanninkieliseen Flanderiin ja eteläiseen ranskankieliseen Valloniaan. Maan kolmas virallinen kieli on saksa.";
    document.getElementById("info3").textContent = "Oikea vastaus on Lissabon. Lissabon on Portugalin pääkaupunki ja suurin kaupunki. Lissabonin väkiluku on 545 245 (2011). Metropolialueella asuu 2,8 miljoonaa ihmistä (2012), mikä on noin neljännes koko Portugalin asukasmäärästä";
    document.getElementById("info4").textContent = "Oikea vastaus on Mustameri. Mustameri on Kaakkois-Euroopan ja Vähän-Aasian välissä sijaitseva sisämeri. Sen rantavaltiot ovat Turkki, Bulgaria, Romania, Ukraina, Venäjä ja Georgia. Suurimmat siihen laskevat joet ovat Tonava, Dnepr ja Don. Pohjoisesta Mustaanmereen työntyy Krimin niemimaa, jonka itäpuolelle jää Asovanmeri-niminen lahti. Bosporinsalmi ja Marmaranmeri yhdistävät Mustanmeren Välimereen. Bosporinsalmi kulkee Istanbulin kaupungin läpi.";
    document.getElementById("info5").textContent = "Oikea vastaus on Volga. Volga on Euroopan pisin ja runsasvetisin joki. Se on Volgan vesistöalueen pääuoma, jonka valuma-alueen pinta-ala on 1,35 miljoonaa neliökilometriä. Erään lähteen mukaan valuma-alueen pinta-ala olisi 1 431 296 neliökilometriä. Volgan pituus on 3 685 kilometriä ja se on yksi Venäjän merkittävimmistä kuljetusreiteistä. Volga ja sen valuma-alue sijaitsevat kokonaisuudessaan Venäjällä.";

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
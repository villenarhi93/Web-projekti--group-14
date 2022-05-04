const data = [

    //lisätään kysymykset ja vastaukset

    {
        question: "Mikä on biosfääri?",
        a: "Kierrätysjärjestelmä",
        b: "Eliökehä tai elonkehä",
        c: "Elinkelpoinen vyöhyke",
        d: "Ilmakehän osa",
        correct: "b",
       
    },
    {
        question: "Mistä ihmiseltä löytyy mm. alasin ja vasara?",
        a: "Korvasta",
        b: "Aivoista",
        c: "Keuhkoista",
        d: "Munuaisista",
        correct: "a",
    
    },
    {
        question: "Minkä tyyppisestä kukasta saadaan vaniljapapuja?",
        a: "Kielosta",
        b: "Liljasta",
        c: "Orkideasta",
        d: "Ruususta",
        correct: "c",
      
    },
    {
        question: "Mikä seuraavista ei ole suomalainen kalalaji?",
        a: "Kivennuoliainen",
        b: "Kummeliturska",
        c: "Säyne",
        d: "Mutu",
        correct: "b",
       
    },
    {
        question: "Milloin dinosaurukset väitetysti kuolivat sukupuuttoon?",
        a: "n. 65,5 miljoonaa vuotta sitten",
        b: "n. 5,5 miljoonaa vuotta sitten",
        c: "n. 20 miljoonaa vuotta sitten",
        d: "n. 3000 vuotta sitten",
        correct: "a",
      
    },
]

    // määritellään muuttujat

   const quiz = document.getElementById("quiz")
   const answerElse = document.querySelectorAll(".answer")
   const questionEls = document.getElementById("question")
   const optionA = document.getElementById("optionA")
   const optionB = document.getElementById("optionB")
   const optionC = document.getElementById("optionC")
   const optionD = document.getElementById("optionD")
   const correctAnswer = document.getElementById("correct_answer")
   const wrongAnswer = document.getElementById("wrong_answer")
   const submitButton = document.getElementById("vastaa")

   let currentQuiz = 0
   let score = 0

    // visan lataus

   loadQuiz()

   function loadQuiz(){
       
       deselectAnswers()
       submitButton.style.display = "block"; //peitetään vastaa-nappula
       const currentQuizData = data[currentQuiz]
       questionEls.innerText = currentQuizData.question
       optionA.innerText = currentQuizData.a
       optionB.innerText = currentQuizData.b
       optionC.innerText = currentQuizData.c
       optionD.innerText = currentQuizData.d
   }

   function deselectAnswers(){
       answerElse.forEach((answerElse) =>(
           answerElse.checked = false
       ))
   }

   function getSelectedAnswer(){
       let answer

       answerElse.forEach((answerElse) =>{
           if(answerElse.checked){
               answer = answerElse.id;
           }
       })

       return answer
    }

     // funktiot millä lasketaan tulos

    submitButton.addEventListener("click", ()=>{
        const answer = getSelectedAnswer()

        if(answer) {
            if(answer === data[currentQuiz].correct) {
                score++
              document.getElementById("correct_answer").innerHTML = "Vastaus on oikein!";
              document.getElementById("wrong_answer").innerHTML = "";
            }
            else {
               document.getElementById("wrong_answer").innerHTML = "Vastaus on väärin!";
              document.getElementById("correct_answer").innerHTML = "";

            }
            currentQuiz++

            if(currentQuiz < data.length){
                loadQuiz()
            } else {
                submitButton.style.display = "none";
                quiz.innerHTML = `
                <h2>Vastasit ${score}/${data.length} Oikeita vastauksia</h2>

                <button onclick="location.reload()">Tee visa uudestaan</button>

                `
            }

        }
  
    
    


    })
function check() {
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var result=document.getElementById("result");
  var quiz= document.getElementById("quiz");

  let score = 0;

  if (q1=="1910-1914") {score++}
  if (q2=="1917") {score++}
  if (q3=="1939-1945") {score++}
  if (q4=="Mauno") {score++}
  if (q5=="1990") {score++}

  if (quiz = 0) {
    document.getElementById("result").innerHTML = "Yritä uudelleen!";
  }
    if (quiz <= 3) {
    document.getElementById("result").innerHTML = "Pisteesi on " + score + "/5" + " Yritä uudelleen!";

  } else {
    document.getElementById("result").innerHTML = "Pisteesi on " + score + "/5" + " Hienoa työtä!";
  }
 
}


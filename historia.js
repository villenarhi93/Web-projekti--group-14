function check() {
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var result=document.getElementById("result");
  var quiz= document.getElementById("quiz");

  if (q1=="1910-1914") {c++}
  if (q2=="1917") {c++}
  if (q3=="1939-1945") {c++}
  if (q4=="Mauno") {c++}
  if (q5=="1990") {c++}

  if (quiz = 0) {
    document.getElementById("result") = "Yritä uudelleen!"
  }
    if (quiz <= 3) {
    document.getElementById("result") = "Pisteesi on " + result + " Yritä uudelleen!";

  } else {
    document.getElementById("result") = "Pisteesi on " + result + " Hienoa työtä!";
  }
 
}


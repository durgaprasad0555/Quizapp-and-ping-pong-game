// array of questions
var dp= [
	{
		question: "1)Which of the following keywords is used to define a variable in Javascript?",
		options: ["var", "let", "Both A and B", "None of these"],
		answer: 2
},
{
		question: "2)Which of the following methods can be used to display data in some form using Javascript?",
		options: ["document.write()", "console.log()", "window.alert()", "Allofthese"],
		answer: 3
	},
	{
		question: "3)How can a datatype be declared to be a constant type?",
		options: ["const", "let", "var", "constant"],
		answer: 0
	},
	{
		question:"4)What keyword is used to check whether a given property is valid or not?",
		options: ["in", "isin", "exist", "lies"],
		answer: 0
	},
	{
		question: "5)When an operator’s value is NULL, the typeof returned by the unary operator is:",
		options: ["Boolean", "Undefined", "Object", "Integer"],
		answer: 2
	},
 {
    question: "6)Which of the following is correct about JavaScript?",
    options:["JavaScript is an Object-Based language"
        , "JavaScript is Assembly-language",        
         "JavaScript is an Object-Oriented language",
     "  JavaScript is a High-level language"],
     answer: 0
 },
 {
    question: "7)Arrays in JavaScript are defined by which of the following statements?",
    options:["It is an ordered list of values"
        , "It is an ordered list of objects",        
         " It is an ordered list of string"
		 ,
     " It is an ordered list of functions"],
     answer: 0
 },
 {
    question: "8). Which of the following is not javascript data types?",
    options:[" Null type"
        , " Undefined type",        
         " Number type"
		 ,
     "All of the mentioned"],
     answer: 3
 },
 {
    question: "9) Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    options:[" Position"
        , "Window",        
         " Standard"
		 ,
     " Location"],
     answer: 2
 },
 {
    question: "10) Which of the following can be used to call a JavaScript Code Snippet?",
    options:["Function/Method"
        , "WindowPreprocessor",        
         "Triggering Event"
		 ,
     "RMI"],
     answer: 0
 }




];


const question1 = document.getElementById("question");
const option1 = document.querySelectorAll("form label span");
const submit = document.getElementById("sub");
const result = document.getElementById("res");
const reload = document.getElementById("rel");


let currentQuestion = 0;
let score = 0;


function show() {
	const currentQuizData = dp[currentQuestion];
	question1.innerText = currentQuizData.question;
	option1.forEach((option1, index) => {
		option1.innerText = currentQuizData.options[index];
	});
}


function check() {
	const selectedOption = document.querySelector("input[name='answer']:checked");
	if (!selectedOption) {
		alert("Please select an option");
		return;
	}
	const answer = selectedOption.value;
	if (answer == dp[currentQuestion].answer) {
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == dp.length) {
		display();
	} else {
		show();
	}
}


function display() {
	result.innerText = `You scored ${score} out of ${dp.length} questions`;
	submit.style.display = "none";
	reload.style.display = "block";
}


function restartQuiz() {
	currentQuestion = 0;
	score = 0;
	result.innerText = "";
	submit.style.display = "block";
	reload.style.display = "none";
	show();
}

submit.addEventListener("click", check);
reload.addEventListener("click", restartQuiz);


show();

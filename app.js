var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ['script', 'javascript', 'js', 'scripting'],
        answer: 'script'
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer:  "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["style", "script", "css", "link"],
        answer: "style"
    },
    {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["script href='xxx.js'", "script name='xxx.js'", "script src='xxx.js'"],
        answer: "script src='xxx.js'"
    }
];

var currentQuestionIndex = 0;
var score = 0;

function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var option = document.createElement('div');
        option.className = 'form-check';
        option.innerHTML = `
            <input class="form-check-input" type="radio" name="option" value="${questions[currentQuestionIndex].options[i]}" id="option${i}">
            <label class="form-check-label" for="option${i}">${questions[currentQuestionIndex].options[i]}</label>
        `;
        optionsElement.appendChild(option);
    }
}

document.getElementById('submit').addEventListener('click', function() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('score').innerText = `Your score is: ${score}/${questions.length}`;
        }
    } else {
        alert("Please select an option!");
    }
});

loadQuestion();

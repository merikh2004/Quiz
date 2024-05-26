const quizData = [
    {
        question: "What does HTML stand for?",
        a: "a) Hyper Text Markup Language",
        b: "b) Home Tool Markup Language",
        c: "c) Hyperlinks and Text Markup Language",
        d: "d) Hyperlinking Text Markup Language",
        correct: "a"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        a: "a) <meta>",
        b: "b) <title>",
        c: "c) <head>",
        d: "d) <body>",
        correct: "b"
    },
    {
        question: "How can you make a numbered list?",
        a: "a) <ul>",
        b: "b) <dl>",
        c: "c) <ol>",
        d: "d) <list>",
        correct: "c"
    },
    {
        question: "Which attribute is used to provide an alternative text for an image?",
        a: "a) alt",
        b: "b) src",
        c: "c) title",
        d: "d) href",
        correct: "a"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "a) <break>",
        b: "b) <lb>",
        c: "c) <br>",
        d: "d) <hr>",
        correct: "c"
    },
    {
        question: "Which HTML element defines the navigation links?",
        a: "a) <nav>",
        b: "b) <navs>",
        c: "c) <navigate>",
        d: "d) <navig>",
        correct: "a"
    },
    {
        question: "How can you create an email link in HTML?",
        a: "a) <a href='mailto:someone@example.com'>Email</a>",
        b: "b) <a href='email:someone@example.com'>Email</a>",
        c: "c) <mail href='someone@example.com'>Email</mail>",
        d: "d) <email>someone@example.com</email>",
        correct: "a"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        a: "a) <bottom>",
        b: "b) <foot>",
        c: "c) <footer>",
        d: "d) <section>",
        correct: "c"
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        a: "a) <checkbox>",
        b: "b) <input type='checkbox'>",
        c: "c) <check>",
        d: "d) <input type='check'>",
        correct: "b"
    },
    {
        question: "How do you insert a comment in HTML?",
        a: "a) <!-- This is a comment -->",
        b: "b) // This is a comment",
        c: "c) /* This is a comment */",
        d: "d) <comment> This is a comment </comment>",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        a: "a) Creative Style Sheets",
        b: "b) Cascading Style Sheets",
        c: "c) Colorful Style Sheets",
        d: "d) Computer Style Sheets",
        correct: "b"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "a) At the end of the document",
        b: "b) In the <head> section",
        c: "c) In the <body> section",
        d: "d) At the beginning of the document",
        correct: "b"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "a) style",
        b: "b) class",
        c: "c) font",
        d: "d) styles",
        correct: "a"
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "a) {body;color:black;}",
        b: "b) body:color=black;",
        c: "c) body {color: black;}",
        d: "d) {body:color=black;}",
        correct: "c"
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        a: "a) all.h1 {background-color: #FFFFFF;}",
        b: "b) h1.all {background-color: #FFFFFF;}",
        c: "c) h1 {background-color: #FFFFFF;}",
        d: "d) all-h1 {background-color: #FFFFFF;}",
        correct: "c"
    },
    {
        question: "Which CSS property controls the text size?",
        a: "a) font-style",
        b: "b) text-style",
        c: "c) font-size",
        d: "d) text-size",
        correct: "c"
    },
    {
        question: "How do you display hyperlinks without an underline?",
        a: "a) a {text-decoration:none;}",
        b: "b) a {underline:none;}",
        c: "c) a {decoration:no-underline;}",
        d: "d) a {text-decoration:no-underline;}",
        correct: "a"
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "a) font-style",
        b: "b) font-family",
        c: "c) font-weight",
        d: "d) font",
        correct: "b"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        a: "a) text-transform:capitalize",
        b: "b) text-style:capitalize",
        c: "c) text-transform:uppercase",
        d: "d) text-style:uppercase",
        correct: "a"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        a: "a) padding-left",
        b: "b) margin-left",
        c: "c) indent-left",
        d: "d) space-left",
        correct: "b"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?<br><code><p id='demo'>This is a demonstration.</p></code>",
        a: "a) document.getElementById('demo').innerHTML = 'Hello World!';",
        b: "b) document.getElement('p').innerHTML = 'Hello World!';",
        c: "c) document.getElementByName('p').innerHTML = 'Hello World!';",
        d: "d) #demo.innerHTML = 'Hello World!';",
        correct: "a"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "a) Both the <head> section and the <body> section are correct",
        b: "b) The <body> section",
        c: "c) The <head> section",
        d: "d) The <footer> section",
        correct: "a"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        a: "a) <script src='script.js'>",
        b: "b) <script href='script.js'>",
        c: "c) <script ref='script.js'>",
        d: "d) <script name='script.js'>",
        correct: "a"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "a) alertBox('Hello World');",
        b: "b) msgBox('Hello World');",
        c: "c) alert('Hello World');",
        d: "d) msg('Hello World');",
        correct: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "a) function myFunction()",
        b: "b) function:myFunction()",
        c: "c) function = myFunction()",
        d: "d) function => myFunction()",
        correct: "a"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "a) call myFunction()",
        b: "b) call function myFunction()",
        c: "c) myFunction()",
        d: "d) myFunction(call)",
        correct: "c"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        a: "a) if i = 5 then",
        b: "b) if (i == 5)",
        c: "c) if i == 5 then",
        d: "d) if i = 5",
        correct: "b"
    },
    {
        question: "How does a WHILE loop start?",
        a: "a) while (i <= 10)",
        b: "b) while i <= 10",
        c: "c) while (i <= 10; i++)",
        d: "d) while (i++ <= 10)",
        correct: "a"
    },
    {
        question: "How can you add a comment in JavaScript?",
        a: "a) 'This is a comment",
        b: "b) <!--This is a comment-->",
        c: "c) // This is a comment",
        d: "d) **This is a comment**",
        correct: "c"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "a) var colors = 'red', 'green', 'blue'",
        b: "b) var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        c: "c) var colors = ['red', 'green', 'blue']",
        d: "d) var colors = (1:'red', 2:'green', 3:'blue')",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
const timeLeftEl = document.getElementById('time-left');
const startQuizBtn = document.getElementById('start-quiz');
const timerSetup = document.getElementById('timer-setup');
const viewAttemptsBtn = document.getElementById('view-attempts');
const attemptsDisplay = document.getElementById('attempts-display');
const attemptsList = document.getElementById('attempts-list');

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft;

startQuizBtn.addEventListener('click', () => {
    const timeInput = document.getElementById('time-input').value;
    const timeInMinutes = parseInt(timeInput, 10);

    if (timeInMinutes >= 10 && timeInMinutes <= 60) {
        timeLeft = timeInMinutes * 60; // convert to seconds
        timerSetup.style.display = 'none';
        quiz.style.display = 'block';
        loadQuiz();
        startTimer();
    } else {
        alert('Please enter a value between 10 and 60 minutes.');
    }
});

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            clearInterval(timer);
            saveAttempt(score, quizData.length);
            displayResult(score, quizData.length);
        }
    }
});

function startTimer() {
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeLeftEl.innerText = `Time: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timer);
            saveAttempt(score, quizData.length);
            displayResult(score, quizData.length);
        }
    }, 1000);
}

function saveAttempt(score, total) {
    const attempts = JSON.parse(localStorage.getItem('attempts')) || [];
    const newAttempt = { date: new Date().toLocaleString(), score: score, total: total };
    attempts.push(newAttempt);
    localStorage.setItem('attempts', JSON.stringify(attempts));
}

function displayResult(score, total) {
    quiz.innerHTML = `
        <h2>You answered ${score}/${total} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `;
}

viewAttemptsBtn.addEventListener('click', () => {
    const attempts = JSON.parse(localStorage.getItem('attempts')) || [];
    attemptsList.innerHTML = '';
    attempts.forEach(attempt => {
        const li = document.createElement('li');
        li.textContent = `Date: ${attempt.date}, Score: ${attempt.score}/${attempt.total}`;
        attemptsList.appendChild(li);
    });
    attemptsDisplay.style.display = 'block';
});

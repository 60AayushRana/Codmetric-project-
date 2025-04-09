const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "London",
            c: "Paris",
            d: "Madrid"
        },
        correctAnswer: "c"
    },
    {
        question: "What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "22",
            d: "2"
        },
        correctAnswer: "b"
    },
    {
        question: "What color is the sky?",
        answers: {
            a: "Red",
            b: "Blue",
            c: "Green",
            d: "Yellow"
        },
        correctAnswer: "b"
    },
    {
        question: "What language is primarily spoken in Brazil?",
        answers: {
            a: "Spanish",
            b: "Portuguese",
            c: "English",
            d: "French"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Mars",
            d: "Saturn"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                 </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const userAnswer = (
            answerContainers[questionNumber].querySelector(`input[name=question${questionNumber}]:checked`) || {}
        ).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
}

document.getElementById('submit').addEventListener('click', showResults);

buildQuiz();
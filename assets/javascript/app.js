//Initial Values
let counter = 30;
let currentQuestion = 0;
let score = 0;
let loss = 0;
let timer;


//Display the question and the choices in the browser

function loadQuestion() {
    const question = quizQuestions[currentQuestion].question; //pulls the question attribute from the quiz question object
    const choices = quizQuestions[currentQuestion].choices;  //pulls the choices attribute
    $('#time').html("Time Left: " + counter);
    
    $("#game").html(`
    <h4>${question}</h4>
    ${loadChoices(choices)};
    `);

}

function loadChoices(choices) {
    let result = '';

    for (let i=0; i < choices.length; i++) {
        result += `<p class = "choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}

loadQuestion();
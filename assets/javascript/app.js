//Initial Values
let counter = 30;
let currentQuestion = 0;
let score = 0;
let loss = 0;
let timer;


// If the timer is over, then go to the next question
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        console.log("Game is Over");
        displayResult();
    }
    else {
        currentQuestion++;
        loadQuestion();
    }
}



//Start a 30 second timer for user to respond or choose an answer to each question

function timeUp() {
    clearInterval(timer);
    loss++;
    preloadImage('lost');
    setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
    counter--;
    $('#time').html('Timer : ' + counter);
    if (counter === 0) {
        timeUp();
    }
}

//Display the question and the choices in the browser

function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);


    const question = quizQuestions[currentQuestion].question; //pulls the question attribute from the quiz question object
    const choices = quizQuestions[currentQuestion].choices;  //pulls the choices attribute
    $('#time').html("Time Left: " + counter);

    $("#game").html(`
    <h4>${question}</h4>
    ${loadChoices(choices)}
    ${loadRemainingQuestion()}
    `);

}

function loadChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        result += `<p class = "choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}

$(document).on('click', '.choice', function () {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        console.log('Winssss!!!');
        preloadImage('win');
        setTimeout(nextQuestion, 3 * 1000);
    } else {
        loss++;
        console.log("Lost!!!");
        preloadImage('lost');
        setTimeout(nextQuestion, 3 * 1000);
    }
})

function displayResult() {
    const result = `
    <p>You get ${score} question(s) right!</p>
    <p>You missed ${loss} question(s)</p>
    <p>Total Quesions ${quizQuestions.length} question(s) right</p>
    <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $("#game").html(result);
}

$(document).on('click', '#reset', function () {
    counter = 30;
    currentQuestion = 0;
    score = 0;
    loss = 0;
    timer = null;

    loadQuestion();
})

function loadRemainingQuestion() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;
    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;


};

function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}

function preloadImage(status) {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (status === 'win') {
        $('#game').html(`
        <p class="preload-image">Congratulations, you picked the correct answer</p>
        <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
        <img src="${randomImage(funImages)}" />
        `);
    }
    else {
        $('#game').html(`
            <p class="preload-image">The correct answer was <b>${correctAnswer}</b></p>
            <p class="preload-image">You lost</p>
            <img src="${randomImage(sadImages)}" />
            `);
    }

}


$("#start").click(function () {
    $("#start").remove();
    $("#time").html(counter);
    loadQuestion();
});

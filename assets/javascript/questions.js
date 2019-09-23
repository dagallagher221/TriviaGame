//Second JS file to store an array of objects as questions


const quizQuestions = [
    {
        question: "Who's statue lies before Blackrock Mountain?",
        choices: ["Nathanos Blightcaller", "Orgrim Doomhammer", "Anduin Lothar", "Varian Wrynn"],
        correctAnswer: "Anduin Lothar"
    },
    {
        question: 'Which of the following is not an Old God?',
        choices: ["C'thun", "Anub'arak", "Yogg'saron", "N'zoth"],
        correctAnswer: "Anub'arak"
    },
    {
        question: "This massive zone is blocked by a gate in the Tanaris Zone, and wasn't accessible until the Cataclysm. What is it called?",
        choices: ["Hyjal", "Twilight Highlands", "Silithus", "Uldum"],
        correctAnswer: "Uldum"
    },
    {
        question: "The Epic Priest Staff, Benediction, can be activated to transform it into....?",
        choices: ["Anathema", "Pestilence", "Purgatory", "Salvation"],
        correctAnswer: "Anathema"
    },
    {
        question: "Which neutral Goblin city is located in the Winterspring zone?",
        choices: ["Gadgetzan", "Ratchet", "Everlook", "Booty Bay"],
        correctAnswer: "Everlook"
    },
    {
        question: "What is the name of the bridge that connects The Wetlands to The Arathi Highlands?",
        choices: ["Great Menethil Bridge", "Khaz Modan Crossing", "Stromgarde Bridge", "Thandol Span"],
        correctAnswer: "Thandol Span"
    },
    {
        question: "A famous quest in The Barrens, whose wife do you help search for?",
        choices: ["Grommash", "Mankrik", "Mandarke", "Mikhail"],
        correctAnswer: "Mankrik"
    },
    {
        question: "Who is the Alliance General in the Alterac Valley Battleground?",
        choices: ["Vandar Stormpike", "Muradin Bronzebeard", "Dagran Thaurissian", "Ozzy Togglevolt"],
        correctAnswer: "Vandar Stormpike"
    },

]

//Array to hold images for correct answers
const funImages = [
    './assets/images/happy fun.gif',
    './assets/images/hellYeah.gif',
    './assets/images/winning.gif',
    './assets/images/yeah.gif',
    './assets/images/you did it.gif'
];

//Array to hold images for incorrect answers
const sadImages = [
    './assets/images/danm.gif',
    './assets/images/oops.gif',
    './assets/images/pretty bad.gif'
];
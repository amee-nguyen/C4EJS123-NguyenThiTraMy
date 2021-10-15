// 1.1 Learn how to create a random number from 0 to 1

let value = Math.random().toFixed(2);
console.log(value);

// 1.2 Learn how to randomly pick an item from an array

let array = [2, 5, 6, 9, 10];
console.log(array[Math.floor(Math.random() * array.length)]);

// 1.3 C4EJSLab - Basic - part 3
// Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise

let quiz = [{
        question: "Who was elected President of the United States in 2017?",
        answer_A: "A. Donald Trump",
        answer_B: "B. Barack Obama",
        answer_C: "C. George Bush",
        answer_D: "D. Charlie Puth",
        correctAnswer: "A",
    },
    {
        question: "What is the national language of Canada?",
        answer_A: "A. English",
        answer_B: "B. Dutch",
        answer_C: "C. French",
        answer_D: "D. Russian",
        correctAnswer: "B",
    },
    {
        question: "What native country is Brazil?",
        answer_A: "A. South American",
        answer_B: "B. North American",
        answer_C: "C. West American",
        answer_D: "D. East American",
        correctAnswer: "B",
    },
];

// 1.4
let ranQuiz = Math.floor(Math.random() * quiz.length);
let ansUer = prompt(`${quiz[ranQuiz].question} \n ${quiz[ranQuiz].answer_A} \n ${quiz[ranQuiz].answer_B} \n ${quiz[ranQuiz].answer_C} \n ${quiz[ranQuiz].answer_D}`);
console.log(ansUer);

// 1.5
if (ansUer.toUpperCase() == quiz[ranQuiz].correctAnswer) {
    alert('Congratulation! You are correct!');
} else {
    alert('Wrong answer! Try your best!');
};

// 1.6, 1.7, 1.8
let score = 0;
while (true) {
    let ranQuiz = Math.floor(Math.random() * quiz.length);
    let ansUer = prompt(`${quiz[ranQuiz].question} \n ${quiz[ranQuiz].answer_A} \n ${quiz[ranQuiz].answer_B} \n ${quiz[ranQuiz].answer_C} \n ${quiz[ranQuiz].answer_D}`);
    if (ansUer.toUpperCase() == quiz[ranQuiz].correctAnswer) {
        score = score + 1;
    };
    console.log(score);
    quiz.splice(ranQuiz, 1);

    if (quiz.length < 1) {
        alert('We are out of question!');
        alert(`You answered correctly ${score} of ${quiz.length}`);
        break;
    }
}
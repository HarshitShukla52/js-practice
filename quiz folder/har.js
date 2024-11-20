const questions =[
    //question 3//
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue whale" , correct:true},
            {text: "Elephant" , correct:false},
            {text: "Giraffe" , correct:false},
        ]
    },
    //question 2//
    {
        question: "Which is the fastest animal in the world ?",
        answers: [
            {text: "Lion" , correct:false},
            {text: "Dog" , correct:false},
            {text: "Jaguar" , correct:true},
            {text: "Giraffe" , correct:false},
        ]
    },
    //question 3//
    {
        question: "Which is the largest reptile in the world ?",
        answers: [
            {text: "Snake" , correct:false},
            {text: "lizard" , correct:true},
            {text: "Crocodile" , correct:false},
            {text: "Anaconda" , correct:false},
        ]
    },
    {
        question: "	4. Which of the following is false as per Vedic theory ?The Brahmins, or priests, came from Purusha's mouth; the Kshatriyas, or warrior rulers, came from Purusha's arms; the Vaishyas, or commoners such as landowners and merchants, came from Purusha's thighs; and the Shudras, or laborers and servants, came from Purusha's feet.",
        answers: [
            {text: "The Brahmans, or priests, came from Purusha’s ears fdjgifhgjkdfhnjkhdjkghfjdhjhnjhjhijuieutirhguhuhgjhgudhuhsudhgudhsuhgruhuhgjdhguihguirhurhurhgurhuhuhuhuhudrhuhuhuhughurhurhuhruhuhuhguhr " , correct:true},
            {text: "The Vaishyas, or the commoners, came from Purusha’s thighs " , correct:false},
            {text: "The Kshatriyas, or warrier rulers, came from Purusha’s arms " , correct:false},
            {text: "The Shudras, or labourers and servants, came from Purusha’s feet " , correct:false},
        ]
    },
]

//practacing js 1//

// const questionElement = document.getElementById('question');
// const answerButtonsElement = document.getElementById('answer_buttons');
// const nextButton = document.getElementById('next_btn');

// let currentQuestionIndex = 0; // Keep track of current question
// let quizComplete = false;     // To track if quiz is completed

// startQuiz();

// function startQuiz() {
//     currentQuestionIndex = 0;
//     nextButton.classList.add('hide');
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = currentQuestion.question;

//     // Dynamically create answer buttons
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         if (answer.correct) {
//             button.dataset.correct = answer.correct; // Mark the correct answer
//         }
//         button.addEventListener('click', selectAnswer); // Handle answer selection
//         answerButtonsElement.appendChild(button);
//     });
// }

// function resetState() {
//     nextButton.classList.add('hide');
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Clear old answers
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct === 'true';
//     setStatusClass(selectedButton, correct);

//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct === 'true');
//         button.disabled = true; // Disable all buttons after selection
//     });

//     if (questions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove('hide'); // Show next button if more questions remain
//     } else {
//         nextButton.innerText = 'Finish';
//         nextButton.classList.remove('hide');
//         quizComplete = true; // Quiz is complete after the last question
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add('correct'); // Highlight correct answer
//     } else {
//         element.classList.add('wrong'); // Highlight incorrect answer
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct');
//     element.classList.remove('wrong');
// }

// // Handle the next button click
// nextButton.addEventListener('click', () => {
//     if (quizComplete) {
//         alert('Quiz completed! Thanks for playing.');
//         startQuiz(); // Restart the quiz
//     } else {
//         currentQuestionIndex++;
//         showQuestion();
//     }
// });

//practacing js 2//

// const questionElement = document.getElementById("question");
// const answerButtonsElement = document.getElementById("answer_buttons");
// const nextButton = document.getElementById("next_btn");

// let currentQuestionIndex = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     nextButton.style.display = "none";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = currentQuestion.question;

//     currentQuestion.answers.forEach((answer) => {
//         const button = document.createElement("button");
//         button.innerText = answer.text;
//         button.classList.add("btn");
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//         answerButtonsElement.appendChild(button);
//     });
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct === "true";
//     setStatusClass(selectedButton, correct);

//     // Disable all buttons after an answer is selected
//     Array.from(answerButtonsElement.children).forEach((button) => {
//         button.disabled = true;
//     });

//     nextButton.style.display = "block"; // Show the "Next" button
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add("correct");
//     } else {
//         element.classList.add("wrong");
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// }

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion(); // Show the next question
//     } else {
//         alert("Quiz completed!"); // You can replace this with your completion logic
//         startQuiz(); // Restart the quiz
//     }
// });

// startQuiz();


//practacing js 3//

// const questionElement = document.getElementById("question");
// const answerButtonsElement = document.getElementById("answer_buttons");
// const nextButton = document.getElementById("next_btn");

// let currentQuestionIndex = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     nextButton.style.display = "none";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = currentQuestion.question;

//     currentQuestion.answers.forEach((answer) => {
//         const button = document.createElement("button");
//         button.innerText = answer.text;
//         button.classList.add("btn");
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//         answerButtonsElement.appendChild(button);
//     });
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct === "true";

//     // Highlight all answers
//     Array.from(answerButtonsElement.children).forEach((button) => {
//         const isCorrect = button.dataset.correct === "true";
//         setStatusClass(button, isCorrect);
//     });

//     // Disable all buttons after an answer is selected
//     Array.from(answerButtonsElement.children).forEach((button) => {
//         button.disabled = true;
//     });

//     nextButton.style.display = "block"; // Show the "Next" button
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add("correct");
//     } else {
//         element.classList.add("wrong");
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// }

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion(); // Show the next question
//     } else {
//         alert("Quiz completed!"); // You can replace this with your completion logic
//         startQuiz(); // Restart the quiz
//     }
// });

// startQuiz();



//practacing js 4//

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // If correct, only highlight the correct button
    if (correct) {
        selectedButton.classList.add("correct");
    } else {
        // If wrong, highlight the selected button as wrong and the correct button as correct
        selectedButton.classList.add("wrong");
        Array.from(answerButtonsElement.children).forEach((button) => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
    }

    // Disable all buttons after an answer is selected
    Array.from(answerButtonsElement.children).forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = "block"; // Show the "Next" button
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Show the next question
    } else {
        alert("Quiz completed!"); // You can replace this with your completion logic
        startQuiz(); // Restart the quiz
    }
});

startQuiz();





const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  startButton.textContent = "Next";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
  
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer-button');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
  
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  const questions = [  {    question: 'What is 7x7+3-2x0 ?',    answers: [      { text: '0', correct: true },      { text: '79', correct: false }    ]
},
{
  question: 'What is a person who usually exerts control over and lives off the earnings of one or more prostitutes called?',
  answers: [
    { text: 'Hooker', correct: false },
    { text: 'Pimp', correct: true },
    { text: 'Trafficker', correct: false },
    { text: 'Ashawo', correct: false }
  ]
},
{
  question: 'Who is a shoddy?',
  answers: [
    { text: 'A beautiful girl', correct: false },
    { text: 'A prostituite', correct: false },
    { text: 'A badly made woman', correct: true },
    { text: 'A young lady', correct: false }
  ]
},
{
  question: 'Which city in Ghana does the Greenwich Meridian pass through?',
  answers: [
    { text: 'Accra', correct: false },
    { text: 'Kumasi', correct: false },
    { text: 'Tarkoradi', correct: false },
    { text: 'Tema', correct: true }
  ]
},
{
  question: 'What is the greatest sports game ?',
  answers: [
    { text: 'Cricket', correct: false },
    { text: 'Basketball', correct: false },
    { text: 'Football', correct: true },
    { text: 'Hockey', correct: false }
  ]
},
{
  question: 'Who invented the first commercial light bulb ?',
  answers: [
    { text: 'Joseph Swan', correct: false },
    { text: 'Thomas Edison', correct: true },
    { text: 'Andy Nestown', correct: false },
    { text: 'Bridget Allasko', correct: false }
  ]
},
{
  question: 'In which country can the Mountain Kilamanjaro be located ?',
  answers: [
    { text: 'Kenyan', correct: false },
    { text: 'Tanzania', correct: true },
    { text: 'South Africa', correct: false },
    { text: 'DR Congo', correct: false }
  ]
},
{
  question: 'In which year was Ai invented ?',
  answers: [
    { text: '1956 ', correct: true },
    { text: '1957', correct: false },
    { text: '2016', correct: false },
    { text: '2020', correct: false }
  ]
},
{
  question: 'What is the past tense of greet?',
  answers: [
    { text: 'great ', correct: false },
    { text: 'greet', correct: false },
    { text: 'greeted', correct: true },
    { text: 'greets', correct: false }
  ]
},
{
  question: 'When did the World War II end?',
  answers: [
    { text: '1959 ', correct: false },
    { text: '1949', correct: false },
    { text: '1957', correct: false },
    { text: '1945', correct: true }
  ]
},
];
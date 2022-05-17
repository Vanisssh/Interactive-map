const quizData = [
    {
        question: "Как названа столица Дагестана? (1/10)",
        a: "Улан-Удэ",
        b: "Махачкала",
        c: "Магас",
        correct: "b",
    },
    {
        question: "Где находится Томская Писаница? (2/10)",
        a: "В Кемеровской области",
        b: "В Томской области",
        c: "В Новосибирской области",
        correct: "a",
    },
    {
        question: "Как названа столица Алтайского края? (3/10)",
        a: "Горно-Алтайск",
        b: "Чита",
        c: "Барнаул",
        correct: "c",
    },
    {
        question: "Какая достопримечательность находится в Санкт-Петербурге? (4/10)",
        a: "Государственная Третьяковская галерея ",
        b: "Иссакиевский собор",
        c: "Воробьёвы горы",
        correct: "b",
    },
    {
        question: "Сколько мостов находятся в Санкт-Петербурге? (5/10)",
        a: "800",
        b: "677",
        c: "750",
        correct: "a",
    },
    {
        question: "Как названа столица Забайкальского края? (6/10)",
        a: "Ижевск",
        b: "Йошкар-Ола",
        c: "Чита",
        correct: "c",
    },
    {
        question: "Кто изображен на флаге и гербе Челябинской области? (7/10)",
        a: "Верблюд",
        b: "Олень",
        c: "Лошадь",
        correct: "a",
    },
    {
        question: "Как неофициально называют Москву? (8/10)",
        a: "Третий Рим",
        b: "Венеция",
        c: "Город на Неве",
        correct: "a",
    },
    {
        question: "В каком из перечисленных регионов есть памятник мамонту? (9/10)",
        a: "Республика Башкортостан",
        b: "Ямало-ненецкий автономный округ",
        c: "Ставропольский край",
        correct: "b",
    },
    {
        question: "Где было сделано фото на фоне? (10/10)",
        a: "Ладожское озеро",
        b: "Азовское море",
        c: "Озеро Байкал",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
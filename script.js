// 1. 퀴즈 문제 은행 (원하는 만큼 추가 가능)
const quizBank = [
    { q: "고래는 물고기(어류)이다.", a: "X" },
    { q: "토마토는 과일이 아니라 채소다.", a: "O" },
    { q: "달팽이도 이빨이 있다.", a: "O" },
    { q: "대한민국의 수도는 부산이다.", a: "X" },
    { q: "지구에서 가장 큰 바다는 태평양이다.", a: "O" },
    { q: "인터넷 익스플로러는 윈도우를 만든 마이크로소프트의 브라우저였다.", a: "O" },
    { q: "타조는 날 수 있는 새다.", a: "X" },
    { q: "거미는 곤충류에 속한다.", a: "X" }, // 거미는 거미류입니다.
    { q: "피카소는 프랑스 태생의 화가이다.", a: "X" }, // 스페인 태생
    { q: "남극에도 눈이 내린다.", a: "O" }
];

// 변수 설정
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval = null;
let currentUsername = "";

// DOM 요소 가져오기
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const btnO = document.getElementById('btn-o');
const btnX = document.getElementById('btn-x');

const timeLeftSpan = document.getElementById('time-left');
const currentScoreSpan = document.getElementById('current-score');
const finalResultText = document.getElementById('final-result');
const rankingList = document.getElementById('ranking-list');

// 이벤트 리스너 등록
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetToStart);
btnO.addEventListener('click', () => checkAnswer("O"));
btnX.addEventListener('click', () => checkAnswer("X"));

// 게임 시작 함수
function startGame() {
    const name = usernameInput.value.trim();
    if (!name) {
        alert("이름을 입력해주세요!");
        return;
    }
    currentUsername = name;
    
    // 변수 초기화
    score = 0;
    timeLeft = 60;
    currentQuestionIndex = 0;
    currentScoreSpan.textContent = score;
    timeLeftSpan.textContent = timeLeft;

    // 문제 셔플
    shuffledQuestions = [...quizBank].sort(() => Math.random() - 0.5);

    // 화면 전환
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // 첫 문제 표시 및 타이머 가동
    showNextQuestion();
    startTimer();
}

// 타이머 가동
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// 문제 출제
function showNextQuestion() {
    // 만약 준비된 문제를 다 풀었다면 다시 셔플해서 공급
    if (currentQuestionIndex >= shuffledQuestions.length) {
        shuffledQuestions = [...quizBank].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    questionText.textContent = shuffledQuestions[currentQuestionIndex].q;
}

// 정답 확인
function checkAnswer(userAnswer) {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].a;

    if (userAnswer === correctAnswer) {
        score += 10; // 맞추면 10점 추가
        currentScoreSpan.textContent = score;
    }

    currentQuestionIndex++;
    showNextQuestion();
}

// 게임 종료
function endGame() {
    clearInterval(timerInterval);
    
    // 화면 전환
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    // 결과 텍스트 변경
    finalResultText.textContent = `${currentUsername}님의 최종 점수는 ${score}점입니다.`;

    // 랭킹 저장 및 로드
    saveRanking(currentUsername, score);
    displayRanking();
}

// 로컬 스토리지에 랭킹 저장
function saveRanking(name, score) {
    let rankings = JSON.parse(localStorage.getItem('ox_quiz_rankings')) || [];
    rankings.push({ name: name, score: score, date: new Date().toLocaleDateString() });
    
    // 점수 높은 순으로 정렬 후 상위 5개만 남기기
    rankings.sort((a, b) => b.score - a.score);
    rankings = rankings.slice(0, 5);

    localStorage.setItem('ox_quiz_rankings', JSON.stringify(rankings));
}

// 랭킹 화면 표시
function displayRanking() {
    rankingList.innerHTML = "";
    const rankings = JSON.parse(localStorage.getItem('ox_quiz_rankings')) || [];

    if (rankings.length === 0) {
        rankingList.innerHTML = "<li>아직 등록된 랭킹이 없습니다.</li>";
        return;
    }

    rankings.forEach((player) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${player.name}</strong>: ${player.score}점 <small style="color:#888;">(${player.date})</small>`;
        rankingList.appendChild(li);
    });
}

// 다시 처음화면으로
function resetToStart() {
    usernameInput.value = "";
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

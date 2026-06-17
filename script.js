// =========================
// OX 퀴즈 문제은행 (100문제)
// =========================
const quizBank = [
    { q: "고래는 물고기(어류)이다.", a: "X" },
    { q: "토마토는 과일이 아니라 채소다.", a: "O" },
    { q: "달팽이도 이빨이 있다.", a: "O" },
    { q: "대한민국의 수도는 부산이다.", a: "X" },
    { q: "지구에서 가장 큰 바다는 태평양이다.", a: "O" },
    { q: "인터넷 익스플로러는 마이크로소프트의 브라우저였다.", a: "O" },
    { q: "타조는 날 수 있는 새다.", a: "X" },
    { q: "거미는 곤충류에 속한다.", a: "X" },
    { q: "피카소는 프랑스 태생의 화가이다.", a: "X" },
    { q: "남극에도 눈이 내린다.", a: "O" },

    { q: "지구는 태양 주위를 돈다.", a: "O" },
    { q: "사자는 초식동물이다.", a: "X" },
    { q: "바나나는 나무에서 열린다.", a: "X" },
    { q: "물은 섭씨 100도에서 끓는다.", a: "O" },
    { q: "펭귄은 날 수 있다.", a: "X" },
    { q: "한국의 국기는 태극기이다.", a: "O" },
    { q: "코끼리는 포유류이다.", a: "O" },
    { q: "박쥐는 새이다.", a: "X" },
    { q: "금은 철보다 무겁다.", a: "O" },
    { q: "달은 스스로 빛을 낸다.", a: "X" },

    { q: "세계에서 가장 큰 대륙은 아시아이다.", a: "O" },
    { q: "수성은 태양에서 가장 먼 행성이다.", a: "X" },
    { q: "비타민 C는 오렌지에 들어있다.", a: "O" },
    { q: "상어는 포유류이다.", a: "X" },
    { q: "개는 후각이 발달한 동물이다.", a: "O" },
    { q: "지구는 평평하다.", a: "X" },
    { q: "무지개는 7가지 색으로 이루어진다.", a: "O" },
    { q: "에베레스트산은 세계에서 가장 높은 산이다.", a: "O" },
    { q: "사과는 채소이다.", a: "X" },
    { q: "낙타는 혹이 있다.", a: "O" },

    { q: "북극곰은 남극에 산다.", a: "X" },
    { q: "대한민국의 화폐 단위는 원이다.", a: "O" },
    { q: "고양이는 야옹 하고 운다.", a: "O" },
    { q: "지구의 위성은 달이다.", a: "O" },
    { q: "바다는 민물이다.", a: "X" },
    { q: "개미는 곤충이다.", a: "O" },
    { q: "거북이는 알을 낳는다.", a: "O" },
    { q: "태양은 행성이다.", a: "X" },
    { q: "물고기는 아가미로 숨을 쉰다.", a: "O" },
    { q: "독수리는 포유류이다.", a: "X" },

    { q: "1년은 365일이다.", a: "O" },
    { q: "윤년은 4년마다 한 번 온다.", a: "O" },
    { q: "서울은 대한민국의 수도이다.", a: "O" },
    { q: "부산은 대한민국의 수도이다.", a: "X" },
    { q: "커피에는 카페인이 들어있다.", a: "O" },
    { q: "초콜릿은 카카오로 만든다.", a: "O" },
    { q: "개구리는 양서류이다.", a: "O" },
    { q: "뱀은 다리가 있다.", a: "X" },
    { q: "오징어는 다리가 10개이다.", a: "O" },
    { q: "문어는 다리가 8개이다.", a: "O" },

    { q: "벌은 꿀을 만든다.", a: "O" },
    { q: "말은 알을 낳는다.", a: "X" },
    { q: "코알라는 호주에 산다.", a: "O" },
    { q: "판다는 육식동물만 먹는다.", a: "X" },
    { q: "치타는 매우 빠른 동물이다.", a: "O" },
    { q: "악어는 파충류이다.", a: "O" },
    { q: "홍학은 분홍색 새이다.", a: "O" },
    { q: "까마귀는 검은색 새이다.", a: "O" },
    { q: "기린의 목은 짧다.", a: "X" },
    { q: "하마는 물속에서도 생활한다.", a: "O" },

    { q: "축구는 발로 하는 운동이다.", a: "O" },
    { q: "농구 골대는 원형이다.", a: "O" },
    { q: "야구공은 네모 모양이다.", a: "X" },
    { q: "배구는 네트가 있다.", a: "O" },
    { q: "탁구공은 보통 흰색 또는 주황색이다.", a: "O" },
    { q: "수영은 물에서 하는 운동이다.", a: "O" },
    { q: "마라톤 거리는 42.195km이다.", a: "O" },
    { q: "태권도는 한국의 무술이다.", a: "O" },
    { q: "골프는 축구공을 사용한다.", a: "X" },
    { q: "배드민턴은 셔틀콕을 사용한다.", a: "O" },

    { q: "HTML은 프로그래밍 언어이다.", a: "X" },
    { q: "CSS는 웹 디자인에 사용된다.", a: "O" },
    { q: "JavaScript는 웹에서 사용된다.", a: "O" },
    { q: "컴퓨터는 전기가 필요 없다.", a: "X" },
    { q: "키보드는 입력 장치이다.", a: "O" },
    { q: "모니터는 출력 장치이다.", a: "O" },
    { q: "마우스는 입력 장치이다.", a: "O" },
    { q: "USB는 저장장치로 사용할 수 있다.", a: "O" },
    { q: "인터넷은 전 세계 네트워크이다.", a: "O" },
    { q: "와이파이는 유선 인터넷이다.", a: "X" },

    { q: "피아노는 악기이다.", a: "O" },
    { q: "바이올린은 현악기이다.", a: "O" },
    { q: "드럼은 타악기이다.", a: "O" },
    { q: "플루트는 금관악기이다.", a: "X" },
    { q: "기타는 줄이 있다.", a: "O" },
    { q: "무지개는 비 온 뒤 볼 수 있다.", a: "O" },
    { q: "번개는 소리보다 빠르다.", a: "O" },
    { q: "눈은 겨울에 자주 내린다.", a: "O" },
    { q: "태풍은 강한 바람을 동반한다.", a: "O" },
    { q: "사막에는 비가 절대 내리지 않는다.", a: "X" },

    { q: "대한민국은 아시아에 위치한다.", a: "O" },
    { q: "일본의 수도는 도쿄이다.", a: "O" },
    { q: "중국의 수도는 상하이이다.", a: "X" },
    { q: "미국의 수도는 워싱턴 D.C.이다.", a: "O" },
    { q: "영국의 수도는 런던이다.", a: "O" },
    { q: "프랑스의 수도는 파리이다.", a: "O" },
    { q: "이탈리아의 수도는 로마이다.", a: "O" },
    { q: "브라질의 수도는 리우데자네이루이다.", a: "X" },
    { q: "캐나다는 북아메리카에 있다.", a: "O" },
    { q: "아프리카는 나라 이름이다.", a: "X" }
];

// =========================
// 변수
// =========================
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval = null;
let currentUsername = "";

// =========================
// DOM
// =========================
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

// 정답 결과 표시용
const answerResult = document.getElementById('answer-result');

// =========================
// 이벤트
// =========================
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetToStart);
btnO.addEventListener('click', () => checkAnswer("O"));
btnX.addEventListener('click', () => checkAnswer("X"));

// =========================
// 게임 시작
// =========================
function startGame() {
    const name = usernameInput.value.trim();

    if (!name) {
        alert("이름을 입력해주세요!");
        return;
    }

    currentUsername = name;
    score = 0;
    timeLeft = 60;
    currentQuestionIndex = 0;

    currentScoreSpan.textContent = score;
    timeLeftSpan.textContent = timeLeft;

    shuffledQuestions = [...quizBank].sort(() => Math.random() - 0.5);

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    answerResult.textContent = "";

    showNextQuestion();
    startTimer();
}

// =========================
// 타이머
// =========================
function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// =========================
// 문제 표시
// =========================
function showNextQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        shuffledQuestions = [...quizBank].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    questionText.textContent =
        shuffledQuestions[currentQuestionIndex].q;
}

// =========================
// 정답 확인
// =========================
function checkAnswer(userAnswer) {
    btnO.disabled = true;
    btnX.disabled = true;

    const currentQuestion =
        shuffledQuestions[currentQuestionIndex];

    const correctAnswer = currentQuestion.a;

    if (userAnswer === correctAnswer) {
        score += 10;

        answerResult.textContent =
            "⭕ 정답입니다! (+10점)";
        answerResult.style.color = "green";
    } else {
        score -= 5;

        answerResult.textContent =
            `❌ 틀렸습니다! 정답은 ${correctAnswer} 입니다. (-5점)`;
        answerResult.style.color = "red";
    }

    currentScoreSpan.textContent = score;

    setTimeout(() => {
        currentQuestionIndex++;
        showNextQuestion();

        answerResult.textContent = "";

        btnO.disabled = false;
        btnX.disabled = false;
    }, 1000);
}

// =========================
// 게임 종료
// =========================
function endGame() {
    clearInterval(timerInterval);

    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    finalResultText.textContent =
        `${currentUsername}님의 최종 점수는 ${score}점입니다.`;

    saveRanking(currentUsername, score);
    displayRanking();
}

// =========================
// 랭킹 저장
// =========================
function saveRanking(name, score) {
    let rankings =
        JSON.parse(localStorage.getItem('ox_quiz_rankings')) || [];

    rankings.push({
        name,
        score,
        date: new Date().toLocaleDateString()
    });

    rankings.sort((a, b) => b.score - a.score);
    rankings = rankings.slice(0, 5);

    localStorage.setItem(
        'ox_quiz_rankings',
        JSON.stringify(rankings)
    );
}

// =========================
// 랭킹 표시
// =========================
function displayRanking() {
    rankingList.innerHTML = "";

    const rankings =
        JSON.parse(localStorage.getItem('ox_quiz_rankings')) || [];

    if (rankings.length === 0) {
        rankingList.innerHTML =
            "<li>등록된 랭킹이 없습니다.</li>";
        return;
    }

    rankings.forEach((player, index) => {
        const li = document.createElement('li');

        li.innerHTML =
            `${index + 1}위 <strong>${player.name}</strong>
             - ${player.score}점
             <small>(${player.date})</small>`;

        rankingList.appendChild(li);
    });
}

// =========================
// 처음 화면
// =========================
function resetToStart() {
    usernameInput.value = "";

    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

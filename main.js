const testContainer = document.getElementById("container");

const testArr = [
  { 문제: ["you", "input"], 해석: "물론!", 정답: ["bet"] },
  { 문제: ["I", "input"], 해석: "내말이!", 정답: ["know"] },
  { 문제: ["input", "to go"], 해석: "잘했어!", 정답: ["way"] },
  { 문제: ["Good", "input"], 해석: "잘 생각했어!", 정답: ["call"] },
  {
    문제: ["input", "for", "input"],
    해석: "해 보는 거야!",
    정답: ["go", "it"],
  },
  { 문제: ["Give me", "input"], 해석: "하이파이브!", 정답: ["five"] },
  { 문제: ["input", "to you"], 해석: "대단하십니다", 정답: ["kudos"] },
  { 문제: ["I'll", "input", "you that"], 해석: "그건 인정", 정답: ["give"] },
  { 문제: ["You", "input", "it"], 해석: "바로 맞혔어!", 정답: ["got"] },
  {
    문제: ["You", "input", "that", "input"],
    해석: "맞았어",
    정답: ["got", "right"],
  },
  { 문제: ["Right", "input"], 해석: "정답", 정답: ["on"] },
  { 문제: ["Moment of", "input"], 해석: "중요한 순간입니다", 정답: ["truth"] },
  {
    문제: ["Look what I`ve", "input"],
    해석: "내가 뭐 가져왔게",
    정답: ["got"],
  },
  {
    문제: ["input", "we go"],
    해석: "자, 간다",
    정답: ["here"],
  },
  {
    문제: ["Go with the", "input"],
    해석: "대세에 따라야지",
    정답: ["flow"],
  },
  {
    문제: ["I", "input"],
    해석: "진짜야",
    정답: ["swear"],
  },
  {
    문제: ["I", "input", "it"],
    해석: "진심이야",
    정답: ["mean"],
  },
  {
    문제: ["input", "my heart"],
    해석: "맹세해",
    정답: ["cross"],
  },
  {
    문제: ["Talk is", "input"],
    해석: "말로는 누가 못해",
    정답: ["cheap"],
  },
  {
    문제: ["He's", "input", "input"],
    해석: "입만 살았어",
    정답: ["all", "talk"],
  },
  {
    문제: ["Me and my", "input", "input"],
    해석: "내 입이 방정이지",
    정답: ["big", "mouth"],
  },
  {
    문제: ["That's", "input", "for you to say"],
    해석: "그런 말은 쉽지",
    정답: ["easy"],
  },
  {
    문제: ["Watch", "input"],
    해석: "조심해!",
    정답: ["out"],
  },
  {
    문제: ["Watch your", "input"],
    해석: "발 조심해",
    정답: ["step"],
  },
  {
    문제: ["Watch your", "input"],
    해석: "방심하지마",
    정답: ["back"],
  },
  { 문제: ["input", "what"], 해석: "있잖아", 정답: ["guess"] },
  { 문제: ["I'll tell you", "input"], 해석: "내 말 들어봐", 정답: ["what"] },
  { 문제: ["Give me a", "input"], 해석: "한번만 봐줘", 정답: ["break"] },
  { 문제: ["input", "does it"], 해석: "살살해", 정답: ["easy"] },
  { 문제: ["input", "me"], 해석: "비위 좀 맞춰줘", 정답: ["humor"] },
  { 문제: ["Hear me", "input"], 해석: "끝까지 들어", 정답: ["out"] },
  { 문제: ["Don't", "input", "me"], 해석: "말 끊지마", 정답: ["interrupt"] },
  { 문제: ["input", "my words"], 해석: "내 말 잘 들어", 정답: ["mark"] },
  {
    문제: ["Are you", "input", "me?"],
    해석: "무슨 말인지 알겠어?",
    정답: ["following"],
  },
  {
    문제: ["You", "input", "me?"],
    해석: "알았어?",
    정답: ["hear"],
  },
  {
    문제: ["Don't you", "input", "?"],
    해석: "모르겠어?",
    정답: ["see"],
  },
  {
    문제: ["input", "there,", "input", "that"],
    해석: "나도 다 해봤어",
    정답: ["been", "done"],
  },
  {
    문제: ["I've learned my", "input"],
    해석: "경험으로 배웠지",
    정답: ["lesson"],
  },
  {
    문제: ["I know him like a", "input"],
    해석: "그 친구 내가 잘 알아",
    정답: ["book"],
  },
  {
    문제: ["He knows all the", "input"],
    해석: "걔는 모르는거 없어",
    정답: ["answers"],
  },
  {
    문제: ["Who", "input", "?"],
    해석: "혹시 알아?",
    정답: ["knows"],
  },
  {
    문제: ["Just", "input", "input"],
    해석: "혹시 모르니까",
    정답: ["in", "case"],
  },
  {
    문제: ["I got your", "input"],
    해석: "내가 있잖아",
    정답: ["back"],
  },
  {
    문제: ["You can", "input", "input", "me"],
    해석: "나에게 맡겨",
    정답: ["count", "on"],
  },
  {
    문제: ["Follow my", "input"],
    해석: "나만 따라와",
    정답: ["lead"],
  },
  {
    문제: ["I don't", "input"],
    해석: "난 괜찮아",
    정답: ["mind"],
  },
  {
    문제: ["Money is no", "input"],
    해석: "돈은 문제가 안돼",
    정답: ["object"],
  },
  {
    문제: ["It's just the", "input", "thing"],
    해석: "술김에 하는 말이야",
    정답: ["booze"],
  },
  {
    문제: ["Get off my", "input"],
    해석: "그만 성가시게해",
    정답: ["back"],
  },
  {
    문제: ["Stop", "input", "me"],
    해석: "그만 좀 괴롭혀",
    정답: ["bugging"],
  },
];

window.onload = function () {
  init();
};

// const

const convertFormat = (number) => {
  return String(number + 1).padStart(4, "0");
};

const init = () => {
  testArr.map((element, idx) => {
    let li = document.createElement("li");

    // index
    let index = document.createElement("p");
    index.classList.add("index");
    index.innerText = convertFormat(idx);
    li.appendChild(index);

    // 해석
    let 해석 = document.createElement("h4");
    해석.classList.add("value");
    해석.innerText = element.해석;
    li.appendChild(해석);

    let quizContainer = document.createElement("div");
    quizContainer.classList.add("flex", "board");

    // 문제
    element.문제.map((tile) => {
      let questionWord = document.createElement(
        tile === "input" ? "input" : "p"
      );
      tile === "input"
        ? questionWord.classList.add(`quiz-${convertFormat(idx)}`, "quiz-input")
        : questionWord.classList.add("quiz");

      questionWord.innerText = tile;
      quizContainer.appendChild(questionWord);
      li.appendChild(quizContainer);
    });

    testContainer.appendChild(li);
  });
};

// 채점하기
const markingBtn = document.querySelector(".marking-button");
let answer = document.getElementById("quiz-0001");

const handleMarking = () => {
  if (testContainer.classList.contains("marking")) {
    return;
  }

  // 정답만 모은 정답목록 배열
  let answerArr = testArr.map(({ 정답 }) => [...정답]);
  let indexArr = document.querySelectorAll(".index");

  answerArr.map((answer, idx) => {
    let userAnswer = document.querySelectorAll(`.quiz-${convertFormat(idx)}`);
    let isCorrect;
    userAnswer.forEach(
      (element, i) => (isCorrect = element.value.toLowerCase() === answer[i])
    );

    isCorrect
      ? userAnswer.forEach((input) => {
          input.classList.add("correct");
          input.readOnly = true;
          indexArr[idx].classList.add("o");
        })
      : userAnswer.forEach((input, i) => {
          const correctAnswer = document.createElement("p");
          correctAnswer.classList.add("wrong");
          correctAnswer.innerText = answer[i];
          input.before(correctAnswer);
          input.remove();
          indexArr[idx].classList.add("x");
        });
  });
  testContainer.classList.add("marking");
};

markingBtn.addEventListener("click", handleMarking);

// 리셋 버튼
const resetBtn = document.querySelector(".reset-button");

const handleReset = () => {
  const wrongArr = document.querySelectorAll(".wrong");
  const correctArr = document.querySelectorAll(".correct");
  // 오답
  wrongArr.length > 0 &&
    wrongArr.forEach((element, idx) => {
      const quizInput = document.createElement("input");
      quizInput.classList.add(`quiz-${convertFormat(idx)}`, "quiz-input");
      element.before(quizInput);
      element.remove();
    });
  // 정답
  correctArr.length > 0 &&
    correctArr.forEach((element, idx) => {
      element.classList.remove("correct");
      element.readOnly = false;
      element.value = "";
    });
  testContainer.classList.remove("marking");
};
resetBtn.addEventListener("click", handleReset);

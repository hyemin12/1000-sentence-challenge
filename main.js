const testContainer = document.getElementById("quiz-container");

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
  renderQuizItem();
  renderPartItem();
};

/** 숫자 4자리 수 맞추는 함수 */
const convertFormat = (number) => {
  return String(number + 1).padStart(4, "0");
};

const limit = 25;
let currentIndex = 0;

//  문제 바꾸기(currentIndex값 바꾸기)
const handleSetCurrentIndex = (e) => {
  const partArr = document.querySelectorAll(".part-item");

  const id = e.target.id.replace("part", "") * 1;

  // active 변경하기
  partArr[currentIndex].classList.remove("active");
  partArr[id].classList.add("active");

  currentIndex = id;
};

const partWrapper = document.querySelector(".part-wrapper");

// 파트 아이템 추가
const renderPartItem = () => {
  const partLength = testArr.length / limit;

  Array(partLength)
    .fill()
    .map((a, idx) => {
      partWrapper.insertAdjacentHTML(
        "beforeend",
        `<li class="part-item ${
          idx === currentIndex && "active"
        }" id="part${idx}">
          Q${limit * idx + 1}~Q${limit * (idx + 1)}
        </li>`
      );
      let partItem = document.getElementById(`part${idx}`);

      partItem.addEventListener("click", handleSetCurrentIndex);

      // 기존방법
      // let partItem = document.createElement("li");
      // partItem.classList.add("part-item");
      // partItem.setAttribute("id", `part${idx}`);
      // idx === currentIndex && partItem.classList.add("active");
      // partItem.innerText = `Q${limit * idx + 1}~Q${limit * (idx + 1)}`;
      // partWrapper.appendChild(partItem);
    });
};

// 퀴즈 리스트 만들기
const renderQuizItem = () => {
  // 목록
  let currentPart = testArr.slice(
    limit * currentIndex,
    limit * (currentIndex + 1)
  );

  // 퀴즈 아이템 추가
  currentPart.map(({ 해석, 문제 }, idx) => {
    let li = document.createElement("li");

    // index
    li.insertAdjacentHTML(
      "beforeend",
      `<p class="index">${convertFormat(idx)}</p>`
    );

    // 해석
    li.insertAdjacentHTML("beforeend", `<h4 class="mean">${해석}</h4>`);

    let quizWrapper = document.createElement("div");
    quizWrapper.classList.add("flex", "board");

    // 문제
    문제.map((word) => {
      word === "input"
        ? quizWrapper.insertAdjacentHTML(
            "beforeend",
            `<input class="quiz-input" />`
          )
        : quizWrapper.insertAdjacentHTML(
            "beforeend",
            `<p class="quiz">${word}</p>`
          );
      li.appendChild(quizWrapper);
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
  let indexArr = document.querySelectorAll(".index");

  // 정답만 모은 정답목록 배열
  let answerArr = testArr.map(({ 정답 }) => [...정답]);

  answerArr.map((answer, idx) => {
    let userAnswer = document.querySelectorAll(`.quiz-${convertFormat(idx)}`);
    let isCorrect;
    userAnswer.forEach(
      (element, i) => (isCorrect = element.value.toLowerCase() === answer[i])
    );

    isCorrect
      ? userAnswer.forEach((input) => {
          const markingText = document.createElement("p");
          markingText.classList.add("correct");
          markingText.innerText = answer[i];
          input.before(markingText);
          input.remove();
          indexArr[idx].classList.add("o");
        })
      : userAnswer.forEach((input, i) => {
          const markingText = document.createElement("p");
          markingText.classList.add("wrong");
          markingText.innerText = answer[i];
          input.before(markingText);
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
  const quizArr = document.querySelectorAll("#quiz-container .board");
  let indexArr = document.querySelectorAll(".index");
  quizArr.forEach((board, idx) => {
    board.childNodes.forEach((element) => {
      if (
        element.classList.contains("correct") ||
        element.classList.contains("wrong")
      ) {
        const quizInput = document.createElement("input");
        quizInput.classList.add(`quiz-${convertFormat(idx)}`, "quiz-input");
        indexArr[idx].classList.remove("x" || "o");
        element.before(quizInput);
        element.remove();
      }
    });
  });

  testContainer.classList.remove("marking");
};
resetBtn.addEventListener("click", handleReset);

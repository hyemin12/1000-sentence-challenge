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
];

window.onload = function () {
  init();
};

const init = () => {
  testArr.map((element, idx) => {
    let li = document.createElement("li");

    // index
    let index = document.createElement("p");
    index.classList.add("index");
    const indexNumber = String(idx + 1).padStart(4, "0");
    index.innerText = indexNumber;
    li.appendChild(index);

    // 해석
    let 해석 = document.createElement("h4");
    해석.classList.add("value");
    해석.innerText = element.해석;
    li.appendChild(해석);

    let quizContainer = document.createElement("div");
    quizContainer.classList.add("flex");
    quizContainer.setAttribute("id", `quiz-${indexNumber}`);

    // 문제
    element.문제.map((word) => {
      let questionWord = document.createElement(
        word === "input" ? "input" : "p"
      );
      questionWord.classList.add(word === "input" ? "quiz-input" : "quiz");
      questionWord.innerText = word;
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
  testArr.map(({ 정답 }, idx) => {
    let aa = document.getElementById(
      `quiz-${String(idx + 1).padStart(4, "0")}`
    );
    console.log(aa);
  });
};

markingBtn.addEventListener("click", handleMarking);

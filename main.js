const quizWrapper = document.getElementById("quiz-container");

const quizAnswer = [
  { 문제: ["you", "input"], 해석: "물론!", 정답: "bet" },
  { 문제: ["I", "input"], 해석: "내말이!", 정답: "know" },
  { 문제: ["input", "to go"], 해석: "잘했어!", 정답: "way" },
  { 문제: ["Good", "input"], 해석: "잘 생각했어!", 정답: "call" },
  {
    문제: ["input", "for", "input"],
    해석: "해 보는 거야!",
    정답: ["go", "it"],
  },
  { 문제: ["Good", "input"], 해석: "", 정답: "" },
  { 문제: ["Good", "input"], 해석: "", 정답: "" },
  { 문제: ["Good", "input"], 해석: "", 정답: "" },
];

window.onload = function () {
  init();
};

const init = () => {
  quizAnswer.map((element, idx) => {
    let li = document.createElement("li");

    // index
    let index = document.createElement("p");
    index.classList.add("index");
    index.innerText = String(idx).padStart(4, "0");
    li.appendChild(index);

    // 해석
    let 해석 = document.createElement("p");
    해석.classList.add("value");
    해석.innerText = element.해석;
    li.appendChild(해석);

    // 문제
    element.문제.map((word) => {
      let 문제단어 = document.createElement(word === "input" ? "input" : "p");
      문제단어.classList.add(word === "input" ? "quiz-input" : "quiz");
      문제단어.innerText = word;
      li.appendChild(문제단어);
    });

    quizWrapper.appendChild(li);
  });
};

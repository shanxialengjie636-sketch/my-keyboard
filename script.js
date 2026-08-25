let enteredPin = ""; 
const maxLen = 4;
const correctAnswer = "1234"; // ★ここに正解の4桁の数字を設定します

const pinDisplay = document.getElementById("pin-display");
const numKeys = document.querySelectorAll(".key-btn[data-val]");
const btnDelete = document.getElementById("btn-delete");
const btnConfirm = document.getElementById("btn-confirm");

const inputScreen = document.getElementById("input-screen");
const successScreen = document.getElementById("success-screen");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
  if (enteredPin.length === 0) {
    pinDisplay.textContent = "暗証番号を入力してください";
    pinDisplay.classList.add("empty");
  } else {
    pinDisplay.textContent = enteredPin;
    pinDisplay.classList.remove("empty");
  }
}

numKeys.forEach(button => {
  button.addEventListener("click", () => {
    if (enteredPin.length < maxLen) {
      enteredPin += button.getAttribute("data-val");
      updateDisplay();
    }
  });
});

btnDelete.addEventListener("click", () => {
  if (enteredPin.length > 0) {
    enteredPin = enteredPin.slice(0, -1);
    updateDisplay();
  }
});

// 確定ボタンの判定処理
btnConfirm.addEventListener("click", () => {
  if (enteredPin === correctAnswer) {
    // 正解の場合：入力画面を隠して成功画面を表示
    inputScreen.classList.add("hidden");
    successScreen.classList.remove("hidden");
  } else {
    // 不正解の場合
    alert("暗証番号が違います。");
    enteredPin = "";
    updateDisplay();
  }
});

// リセットボタン（最初に戻る）
btnReset.addEventListener("click", () => {
  enteredPin = "";
  updateDisplay();
  successScreen.classList.add("hidden");
  inputScreen.classList.remove("hidden");
});

updateDisplay();

let enteredPin = ""; 
const maxLen = 4;
const correctAnswer = "1378"; // ★正解の4桁の数字（自由に変更してください）

const pinDisplay = document.getElementById("pin-display");
const numKeys = document.querySelectorAll(".key-btn[data-val]");
const btnDelete = document.getElementById("btn-delete");
const btnConfirm = document.getElementById("btn-confirm");

const inputScreen = document.getElementById("input-screen");
const successScreen = document.getElementById("success-screen");
const successVideo = document.getElementById("success-video");

// 画面表示の更新
function updateDisplay() {
  if (enteredPin.length === 0) {
    pinDisplay.textContent = "暗証番号を入力してください";
    pinDisplay.classList.add("empty");
  } else {
    pinDisplay.textContent = enteredPin;
    pinDisplay.classList.remove("empty");
  }
}

// 数字入力
numKeys.forEach(button => {
  button.addEventListener("click", () => {
    if (enteredPin.length < maxLen) {
      enteredPin += button.getAttribute("data-val");
      updateDisplay();
    }
  });
});

// 1文字削除
btnDelete.addEventListener("click", () => {
  if (enteredPin.length > 0) {
    enteredPin = enteredPin.slice(0, -1);
    updateDisplay();
  }
});

// 確定ボタンの判定
btnConfirm.addEventListener("click", () => {
  if (enteredPin === correctAnswer) {
    // 正解：キーボード画面を隠して大画面動画を表示
    inputScreen.classList.add("hidden");
    successScreen.classList.remove("hidden");
    
    // 動画を最初から再生
    successVideo.currentTime = 0;
    successVideo.play().catch(error => {
      console.log("自動再生が制限されました:", error);
    });
  } else {
    alert("暗証番号が違います。");
    enteredPin = "";
    updateDisplay();
  }
});

// 初期状態の表示
updateDisplay();

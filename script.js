let enteredPin = ""; // 入力された数字をそのまま蓄積
const maxLen = 4;    // 最大4桁

const pinDisplay = document.getElementById("pin-display");
const numKeys = document.querySelectorAll(".key-btn[data-val]");
const btnDelete = document.getElementById("btn-delete");
const btnConfirm = document.getElementById("btn-confirm");

// 画面表示の更新処理
function updateDisplay() {
  if (enteredPin.length === 0) {
    // 1文字も入力されていない場合
    pinDisplay.textContent = "暗証番号を入力してください";
    pinDisplay.classList.add("empty");
  } else {
    // 数字が入力されている場合、そのまま表示
    pinDisplay.textContent = enteredPin;
    pinDisplay.classList.remove("empty");
  }
}

// 数字ボタンのクリック
numKeys.forEach(button => {
  button.addEventListener("click", () => {
    if (enteredPin.length < maxLen) {
      enteredPin += button.getAttribute("data-val");
      updateDisplay();
    }
  });
});

// 削除ボタン（末尾の1文字を消す）
btnDelete.addEventListener("click", () => {
  if (enteredPin.length > 0) {
    enteredPin = enteredPin.slice(0, -1);
    updateDisplay();
  }
});

// 確定ボタン
btnConfirm.addEventListener("click", () => {
  if (enteredPin.length === maxLen) {
    alert("入力された暗証番号: " + enteredPin);
    enteredPin = ""; // 入力をクリア
    updateDisplay();
  } else {
    alert("4桁の数字を入力してください。");
  }
});

// 初期化
updateDisplay();

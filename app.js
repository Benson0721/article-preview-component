const button = document.querySelectorAll(".article__shareIcon");
const footer1 = document.querySelector(".article__footer--type1");
const footer2 = document.querySelector(".article__footer--type2");
const links = document.querySelectorAll("a");
const contentElement = document.getElementById("text");
const headerElement = document.getElementById("header");
const cursor = document.querySelector(".cursor");
const header = {
  text: "An unusual day",
  height: 5,
};
const content = {
  text: "Today is my first time in Japan. Looking back, so many things have happened — each one exciting and adventurous. Now, I finally made it! Even if it may seem like a small achievement to others,I am still be proud of myself. I finally done it! And I will keepgoing.....",
  height: 50,
};

let index = 0;
button.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(footer2.classList);
    footer2.classList.toggle("visible");
    links.forEach((link) => {
      link.classList.toggle("disable");
    });
  });
});

const headerTyping = () => {
  let id = setInterval(() => {
    headerElement.textContent += header.text.slice(index - 1, index); // 更新文本內容
    updateCursorPosition(headerElement, header.height);
    index++;
    if (index > header.text.length) {
      contentTyping();
      index = 0;
      clearInterval(id);
    }
  }, 100);
};

const contentTyping = () => {
  let id = setInterval(() => {
    contentElement.textContent += content.text.slice(index - 1, index); // 更新文本內容
    updateCursorPosition(contentElement, content.height);
    index++;
    if (index > content.text.length) {
      clearInterval(id);
      cursor.style.display = "none";
    }
  }, 50);
};

function updateCursorPosition(element, height) {
  const rect = element.getBoundingClientRect();
  const currentText = element.textContent; // 獲取當前顯示的文本
  const lastCharIndex = currentText.length - 1; // 獲取最後一個字符的索引
  if (lastCharIndex >= 0) {
    const range = document.createRange(); // 創建一個範圍
    const selection = window.getSelection(); // 獲取當前選擇
    range.setStart(element.childNodes[0], lastCharIndex + 1); // 設置範圍到最後一個字符
    range.collapse(true); // 收縮範圍

    selection.removeAllRanges(); // 清除當前選擇
    selection.addRange(range); // 添加新的範圍

    const rectCursor = range.getBoundingClientRect(); // 獲取光標範圍的位置信息
    cursor.style.left = rectCursor.left - rect.left + "px"; // 更新光標位置
    cursor.style.top = rectCursor.top - rect.top + height + "px"; // 確保光標在文字的底部
  }
}

headerTyping();

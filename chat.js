// Твой токен (лучше потом спрятать на сервере!)
const BOT_TOKEN = "8391762855:AAEmr3CAg9W5D3TUrTcWkglCTBsJ9QqSZNo";

// ID чата (твой Telegram ID, чтобы сообщения шли тебе)
const CHAT_ID = "7589495018"; // ← это твой ID

// API URL
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// Элементы
const chatBtn = document.getElementById("chat-btn");
const chatWidget = document.getElementById("chat-widget");
const closeChatBtn = document.getElementById("close-chat");
const sendMessageBtn = document.getElementById("send-message");
const messageInput = document.getElementById("message-input");
const messagesDiv = document.getElementById("chat-messages");

// Открыть/закрыть чат
chatBtn.addEventListener("click", () => {
  chatWidget.classList.toggle("hidden");
});
closeChatBtn.addEventListener("click", () => {
  chatWidget.classList.add("hidden");
});

// Отправка сообщения
function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;

  // Добавляем сообщение в окно
  const p = document.createElement("p");
  p.textContent = "Вы: " + msg;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Отправляем в Telegram
  fetch(TELEGRAM_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `💬 Сообщение с сайта:\n${msg}`,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log("Отправлено:", data);
    })
    .catch(err => {
      console.error("Ошибка:", err);
    });

  // Чистим поле
  messageInput.value = "";
}

// Кнопка и Enter
sendMessageBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const welcome = document.getElementById("welcome-screen");
  const mainSite = document.getElementById("main-site");
  const contactForm = document.querySelector(".contact-form");

  // Анімація переходу з welcome → main-site
  enterBtn.addEventListener("click", () => {
    welcome.classList.add("fade-out");

    setTimeout(() => {
      welcome.style.display = "none";
      mainSite.classList.remove("hidden");
      mainSite.classList.add("fade-in");
    }, 800); // час синхронізований з CSS transition
  });

  document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const welcome = document.getElementById("welcome-screen");
  const mainSite = document.getElementById("main-site");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      // Запускаем анимацию исчезновения welcome
      welcome.classList.add("fade-out");

      setTimeout(() => {
        welcome.style.display = "none";   // скрыть экран приветствия
        mainSite.classList.remove("hidden"); 
        mainSite.classList.add("fade-in"); // плавное появление сайта
      }, 800); // 800ms совпадает с transition в CSS
    });
  }
});


  // Відправка форми (імітація)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      console.log("Форма відправлена:", data);

      alert("✅ Повідомлення надіслано! Дякуємо за ваш відгук.");
      contactForm.reset();
    });
  }
});
fetch(`https://api.telegram.org/bot8391762855:AAEmr3CAg9W5D3TUrTcWkglCTBsJ9QqSZNo/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chat_id: '7589495018>',  // ID чату адміна (отримайте через @userinfobot)
    text: `Повідомлення з сайту: ${text}`
  })
})

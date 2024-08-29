// "use strict";

// const element = {
//     sale: document.querySelector('.sale'),
//     date: document.querySelector('.date'),
//     spans: document.querySelectorAll('span'),
//     paragrapgs: document.querySelectorAll('p'),
 
// };

// document.querySelector('.close').addEventListener('click', () => {
//     element.sale.classList.toggle('hidden');

// })

// const endDate = new Date();
// endDate.setHours(endDate.getHours() + 13);
// endDate.setMinutes(endDate.getMinutes() + 12);

// const udapteCountDown = () => {
//     const now = new Date();
//     const timeLeft = endDate - now;
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
//     element.date.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
//     element.spans.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
//     element.paragrapgs.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
//     if (timeLeft < 0) {
//         clearInterval(countdownInterval);
//         element.sale.classList.toggle('hidden');
//     }
//     setTimeout(udapteCountDown, 1000);

//     const countdownInterval = setInterval(udapteCountDown, 1000);
//     udapteCountDown();
//     return countdownInterval;

    // element.date.textContent = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
// }


//console.log(----------------------------------------------------------------)


// "use strict";

// const element = {
//     sale: document.querySelector('.sale'),
//     date: document.querySelector('.date'),
//     spansAndParagraphs: document.querySelectorAll('span, p'), // Об'єднання spans та paragraphs
//     oldPrice: document.querySelector('.old-price'),
//     newPrice: document.querySelector('.new-price')
// };

// document.querySelector('.close').addEventListener('click', () => {
//     element.sale.classList.toggle('hidden');
// });

// const endDate = new Date();
// endDate.setHours(endDate.getHours() + 0);
// endDate.setMinutes(endDate.getMinutes() + 1);

// const updateCountDown = () => {
//     const now = new Date();
//     const timeLeft = endDate - now;
    
//     if (timeLeft <= 0) {
//         clearInterval(countdownInterval);
//         element.sale.classList.add('hidden');
//         return;
//     }
    
//     const formatTime = (t) => String(Math.floor(t)).padStart(2, '0');
    
//     const days = formatTime(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = formatTime((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = formatTime((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = formatTime((timeLeft % (1000 * 60)) / 1000);

//     const timeString = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
//     element.date.textContent = timeString;
    
//     element.spansAndParagraphs.forEach(el => el.textContent = timeString);

//     // Розрахунок нової ціни зі знижкою
//     const oldPrice = parseFloat(element.oldPrice.textContent); // Витягаємо стару ціну
//     const discount = 0.2; // Наприклад, знижка 20%
//     const newPrice = (oldPrice * (1 - discount)).toFixed(2); // Обчислюємо нову ціну
//     element.newPrice.textContent = `${newPrice} грн`; // Відображаємо нову ціну
// };

// // Запуск таймера
// const countdownInterval = setInterval(updateCountDown, 1000);
// updateCountDown(); // Одразу оновлює значення при запуску скрипта




console.log("----------------------------------------------------------------");




// "use strict";

// const element = {
//   sale: document.querySelector(".sale"),
//   date: document.querySelector(".date"),
//   spans: document.querySelectorAll("span"),
//   paragraphs: document.querySelectorAll("p")
// };

// document.querySelector(".close").addEventListener("click", () => {
//   element.sale.classList.toggle("hidden");
// });

// const endDate = new Date();
// endDate.setHours(endDate.getHours() + 13);
// endDate.setMinutes(endDate.getMinutes() + 49);

// const udapteCountDown = () => {
//   const now = new Date();
//   const distance = endDate - now;
//   const { hours, minutes, seconds } = {
//     hours: String(Math.floor(distance / (1000 * 60 * 60))).padStart(2, "0"),
//     minutes: String(
//       Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//     ).padStart(2, "0"),
//     seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
//       2,
//       "0"
//     )
//   };
//   element.date.textContent = `${hours} ч ${minutes} мин ${seconds} с`;

//   if (distance < 0) {
//     clearInterval(intervalValid);
//     element.sale.classList.toggle("hidden");
//     element.spans.forEach((el) => el.classList.toggle("hidden"));
//     element.paragraphs.forEach((item) => (item.style.textDecoration = "none"));
//   }
// };

// udapteCountDown();
// const intervalValid = setInterval(udapteCountDown, 1000);

// 
console.log("----------------------------------------------------------------");

"use strict";

const element = {
  sale: document.querySelector(".sale"),
  date: document.querySelector(".date"),
  spans: document.querySelectorAll("span"),
  paragraphs: document.querySelectorAll("p")
};

document.querySelector(".close").addEventListener("click", () => {
  element.sale.classList.toggle("hidden");
});

const endDate = new Date();
endDate.setHours(endDate.getHours() + 0);
endDate.setMinutes(endDate.getMinutes() + 1);

const udapteCountDown = () => {
  const now = new Date();
  const distance = endDate - now;
  const { hours, minutes, seconds } = {
    hours: String(Math.floor(distance / (1000 * 60 * 60))).padStart(2, "0"),
    minutes: String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0"),
    seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    )
  };
  element.date.textContent = `${hours} ч ${minutes} мин ${seconds} с`;

  if (distance < 0) {
    clearInterval(intervalValid);
    element.sale.classList.toggle("hidden");
    element.spans.forEach((el) => el.classList.toggle("hidden"));
    element.paragraphs.forEach((item) => (item.style.textDecoration = "none"));
  }
};

udapteCountDown();
const intervalValid = setInterval(udapteCountDown, 1000);


















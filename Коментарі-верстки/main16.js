// "use strict";
// // rating start
// const stars = document.querySelectorAll("i");
// const spanNumberRating = document.querySelector(".spanNumberRating");
// //
// const btnCommentAdd = document.querySelector(".add-comment");
// const form = document.querySelector(".form");
// const btnCloseForm = document.querySelector(".close");
// const btnSendForm = document.querySelector(".send");
// const formInputName = document.querySelector(".form__input-name");
// const formInputLastName = document.querySelector(".form__input-surname");
// const wrapper = document.querySelector(".wrapper");
// const textArea = document.querySelector(".form__textarea");
// const commentUser = document.querySelector(".block__comment-user");

// stars.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     spanNumberRating.textContent = index + 1;
//     stars.forEach((item, index2) => {
//       index >= index2
//         ? item.classList.add("active")
//         : item.classList.remove("active");
//     });
//   });
// });

// function addCommentHandler() {
//   form.classList.toggle("hidden");
//   btnCommentAdd.classList.toggle("hidden");
// }

// btnCommentAdd.addEventListener("click", () => {
//   addCommentHandler();
// });

// btnCloseForm.addEventListener("click", () => {
//   addCommentHandler();
// });

// btnSendForm.addEventListener("click", () => {
//   if (formInputName.value.length >= 3 && formInputLastName.value.length >= 4) {
//     const ratingComment = +spanNumberRating.textContent;
//     console.log(ratingComment);

//     const arrStrt = [];

//     for (let i = 0; i < ratingComment; i++) {
//       const a1 = document.createElement("span");
//       a1.textContent = "★";
//       arrStrt.push(a1);
//     }
//       console.log(arrStrt);

//      htmlContainer(arrStrt)
//         textArea.value = formInputName.value =
//             formInputLastName.value = "";
//       addCommentHandler();
//       showHiddenComment();
//     } else {
//         alert("Поля '��м' та 'Прізвище' містять менше 3 та 4 символів!");
//         return;
//     }


// });


// function htmlContainer(arr) {
//   const date = new Date().toLocaleString("default", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit"
//   });

//   wrapper.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div class="block">
//         <h1 class="block__h1">${formInputName.value} ${
//       formInputLastName.value
//     }</h1>
//         <p class="block__p">оценка: ${spanNumberRating.textContent}${arr
//       .map(
//         (el) => `
//         <span class="spanstar">${el.textContent}</span>`
//       )
//       .join("")} </p>
//         <p class="block__comment">комментарии: ${
//           textArea.value === "" ? "❌" : "✔"
//         }</p>
//         <p class="block__comment-user">
//          ${textArea.value === "" ? "нет комментариев" : textArea.value}
//         </p>
//         <div class="block__date">${date}</div>
//       </div>
//   `
//   );
// }

// //функція закривання коментарів

// let button = false;
// let hideState = false;

// function showHiddenComment() {
//     const div = document.querySelectorAll('.block');
//     console.log(div)
    
//   const arrayDiv = [...div];

//   if (div.length > 2 && !buttonsAdded) {
//     wrapper.insertAdjacentHTML(
//       "beforeend",
//       `
//     <div class="buttons-block">
//     <button class="btn1">показать еще</button>
//     <button class="btn2">скрыть</button>
//   </div>
//     `
//     );

//     buttonsAdded = true;


//         const showMoreBtn = document.querySelector('.btn1');
//         showMoreBtn.addEventListener('click', function () {
//             arrayDiv.forEach((el) => {
//                 el.classList.remove('hidden')
//             });
//             showMoreBtn.style.display = "none"
//             hideState = false;
//         });

//         const hideBtn = document.querySelector('.btn2');
//         hideBtn.addEventListener('click', function () {
//             if (!hideState) {
//                 arrayDiv.slice(1).forEach((el) => {
//                     el.classList.add('hidden')
//                 });
//                 hideState = true;
//                 showMoreBtn.style.display = "inline-block"
//                 // hideBtn.textContent = "показать все";
//                 // } 
//             }
//         });
//     }
//     if (div.length > 2) {
//         arrayDiv.forEach((el, index) => {
//             if (index > 1) {
//                 el.classList.add('hidden')
//             }
//         });
//     }
// }


// console.log('--------------------------------------------------------------------------------------------------------------------------------')

    
    //Написала AI
    // const comment = document.createElement("div");
    // comment.classList.add("block__comment");

    // const commentUser = document.createElement("div");
    // commentUser.classList.add("block__comment-user");
    // commentUser.textContent = `${formInputName.value} ${formInputLastName.value}`;

    // const commentText = document.createElement("p");
    // commentText.textContent = textArea.value;

    // comment.appendChild(commentUser);
    // comment.appendChild(commentText);
    // wrapper.appendChild(comment);

    // form.reset();
    // addCommentHandler();
    //Написала AI



// console.log('--------------------------------------------------------------------------------------------------------------------------------')



// "use strict";

// // Вибір елементів DOM
// const stars = document.querySelectorAll("i");
// const spanNumberRating = document.querySelector(".spanNumberRating");
// const btnCommentAdd = document.querySelector(".add-comment");
// const form = document.querySelector(".form");
// const btnCloseForm = document.querySelector(".close");
// const btnSendForm = document.querySelector(".send");
// const formInputName = document.querySelector(".form__input-name");
// const formInputLastName = document.querySelector(".form__input-surname");
// const wrapper = document.querySelector(".wrapper");
// const textArea = document.querySelector(".form__textarea");

// let buttonsAdded = false; // Прапорець, щоб перевірити, чи були додані кнопки

// // Обробка логіки оцінювання зірками
// stars.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     spanNumberRating.textContent = index + 1;
//     stars.forEach((item, index2) => {
//       item.classList.toggle("active", index >= index2);
//     });
//   });
// });

// // Функція для перемикання видимості форми коментарів
// function toggleCommentForm() {
//   form.classList.toggle("hidden");
//   btnCommentAdd.classList.toggle("hidden");
// }

// // Додаємо обробники подій для відкриття та закриття форми коментарів
// btnCommentAdd.addEventListener("click", toggleCommentForm);
// btnCloseForm.addEventListener("click", toggleCommentForm);

// // Обробка відправки коментаря
// btnSendForm.addEventListener("click", () => {
//   if (formInputName.value.length >= 3 && formInputLastName.value.length >= 4) {
//     const ratingComment = +spanNumberRating.textContent;
//     const arrStars = [];

//     for (let i = 0; i < ratingComment; i++) {
//       const starSpan = document.createElement("span");
//       starSpan.textContent = "★";
//       arrStars.push(starSpan);
//     }

//     renderComment(arrStars);
//     clearFormFields();
//     toggleCommentForm();
//     manageCommentsVisibility();
//   } else {
//     alert("Поля 'Ім'я' та 'Прізвище' містять менше 3 та 4 символів відповідно!");
//   }
// });

// // Функція для відображення коментаря в HTML
// function renderComment(arrStars) {
//   const date = new Date().toLocaleString("default", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   wrapper.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div class="block">
//         <h1 class="block__h1">${formInputName.value} ${formInputLastName.value}</h1>
//         <p class="block__p">оцінка: ${spanNumberRating.textContent}${arrStars
//           .map((el) => `<span class="spanstar">${el.textContent}</span>`)
//           .join("")}</p>
//         <p class="block__comment">коментарі: ${
//           textArea.value === "" ? "❌" : "✔"
//         }</p>
//         <p class="block__comment-user">
//           ${textArea.value === "" ? "немає коментарів" : textArea.value}
//         </p>
//         <div class="block__date">${date}</div>
//       </div>
//     `
//   );
// }

// // Функція для очищення полів форми після відправки
// function clearFormFields() {
//   textArea.value = "";
//   formInputName.value = "";
//   formInputLastName.value = "";
// }

// // Функція для керування видимістю коментарів і додавання кнопок "показати/сховати"
// function manageCommentsVisibility() {
//   const divs = document.querySelectorAll(".block");
//   const arrayDivs = [...divs];

//   if (divs.length > 2 && !buttonsAdded) {
//     wrapper.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class="buttons-block">
//         <button class="btn1">показати ще</button>
//         <button class="btn2">сховати</button>
//       </div>
//       `
//     );
//     buttonsAdded = true;

//     const showMoreBtn = document.querySelector(".btn1");
//     const hideBtn = document.querySelector(".btn2");

//     showMoreBtn.addEventListener("click", () => {
//       arrayDivs.forEach((el) => el.classList.remove("hidden"));
//       showMoreBtn.style.display = "none";
//       hideState = false;
//     });

//     hideBtn.addEventListener("click", () => {
//       if (!hideState) {
//         arrayDivs.slice(1).forEach((el) => el.classList.add("hidden"));
//         hideState = true;
//         showMoreBtn.style.display = "inline-block";
//       }
//     });
//   }

//   if (divs.length > 2) {
//     arrayDivs.
// forEach((el, index) => {
//       if (index > 1) {
//         el.classList.add("hidden");
//       }
//     });
//   }
// }



// console.log('--------------------------------------------------------------------------------------------------------------------------------')



"use strict";

// Вибір елементів DOM
const stars = document.querySelectorAll("i");
const spanNumberRating = document.querySelector(".spanNumberRating");
const btnCommentAdd = document.querySelector(".add-comment");
const form = document.querySelector(".form");
const btnCloseForm = document.querySelector(".close");
const btnSendForm = document.querySelector(".send");
const formInputName = document.querySelector(".form__input-name");
const formInputLastName = document.querySelector(".form__input-surname");
const wrapper = document.querySelector(".wrapper");
const textArea = document.querySelector(".form__textarea");

let buttonsAdded = false; // Прапорець, щоб перевірити, чи були додані кнопки
let hideState = false; // Прапорець для відстеження стану приховування елементів

// Обробка логіки оцінювання зірками
stars.forEach((item, index) => {
  item.addEventListener("click", () => {
    spanNumberRating.textContent = index + 1;
    stars.forEach((item, index2) => {
      item.classList.toggle("active", index >= index2);
    });
  });
});

// Функція для перемикання видимості форми коментарів
function toggleCommentForm() {
  form.classList.toggle("hidden");
  btnCommentAdd.classList.toggle("hidden");
}

// Додаємо обробники подій для відкриття та закриття форми коментарів
btnCommentAdd.addEventListener("click", toggleCommentForm);
btnCloseForm.addEventListener("click", toggleCommentForm);

// Обробка відправки коментаря
btnSendForm.addEventListener("click", () => {
  if (formInputName.value.length >= 3 && formInputLastName.value.length >= 4) {
    const ratingComment = +spanNumberRating.textContent;
    const arrStars = [];

    for (let i = 0; i < ratingComment; i++) {
      const starSpan = document.createElement("span");
      starSpan.textContent = "★";
      arrStars.push(starSpan);
    }

    renderComment(arrStars);
    clearFormFields();
    toggleCommentForm();
    manageCommentsVisibility();
  } else {
    alert("Поля 'Ім'я' та 'Прізвище' містять менше 3 та 4 символів відповідно!");
  }
});

// Функція для відображення коментаря в HTML
function renderComment(arrStars) {
  const date = new Date().toLocaleString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  wrapper.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="block">
        <h1 class="block__h1">${formInputName.value} ${formInputLastName.value}</h1>
        <p class="block__p">оцінка: ${spanNumberRating.textContent}${arrStars
          .map((el) => `<span class="spanstar">${el.textContent}</span>`)
          .join("")}</p>
        <p class="block__comment">коментарі: ${
          textArea.value === "" ? "❌" : "✔"
        }</p>
        <p class="block__comment-user">
          ${textArea.value === "" ? "немає коментарів" : textArea.value}
        </p>
        <div class="block__date">${date}</div>
      </div>
    `
  );
}

// Функція для очищення полів форми після відправки
function clearFormFields() {
  textArea.value = "";
  formInputName.value = "";
  formInputLastName.value = "";
}

// Функція для керування видимістю коментарів і додавання кнопок "показати/сховати"
function manageCommentsVisibility() {
  const divs = document.querySelectorAll(".block");
  const arrayDivs = [...divs];

  if (divs.length > 2 && !buttonsAdded) {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="buttons-block">
        <button class="btn1">показати ще</button>
        <button class="btn2">сховати</button>
      </div>
      `
    );
    buttonsAdded = true;

    const showMoreBtn = document.querySelector(".btn1");
    const hideBtn = document.querySelector(".btn2");

    showMoreBtn.addEventListener("click", () => {
      arrayDivs.forEach((el) => el.classList.remove("hidden"));
      showMoreBtn.style.display = "none";
      hideState = false;
    });

    hideBtn.addEventListener("click", () => {
      if (!hideState) {
        arrayDivs.slice(1).forEach((el) => el.classList.add("hidden"));
        hideState = true;
        showMoreBtn.style.display = "inline-block";
      } else {
        arrayDivs.forEach((el) => el.classList.remove("hidden"));
        hideState = false;
        showMoreBtn.style.display = "none";
      }
    });
  }

  if (divs.length > 2) {
    arrayDivs.forEach((el, index) => {
      if (index > 1) {
        el.classList.add("hidden");
      }
    });
  }
}


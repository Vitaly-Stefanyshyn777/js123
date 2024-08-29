// "use strict";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     const body = document.body;
//     body.classList.toggle('dark-mode')
// })  


// "use strict";

// const btn = document.querySelector(".btn");
// const body = document.body;
// const save = localStorage.getItem('theme')

// if (save) body.classList.add(save);

// btn.addEventListener("click", () => {
//     // body.classList.toggle('dark-mode');
//     // localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
   
//         const a1 = body.classList.contains('dark-mode') ? 
//            'light-theme' : 'dark-mode';
//     body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', a1)
// })

"use strict";

const btn = document.querySelector(".btn");
const body = document.body;
const save = localStorage.getItem('theme');

if (save) body.classList.add(save);

btn.addEventListener("click", () => {
    // Визначаємо, яка тема активна в даний момент
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-theme';
    
    // Перемикаємо тему
    body.classList.toggle('dark-mode');
    
    // Визначаємо нову тему після перемикання
    const newTheme = currentTheme === 'dark-mode' ? 'light-theme' : 'dark-mode';
    
    // Зберігаємо нову тему в localStorage
    localStorage.setItem('theme', newTheme);
});









"use strict";

const cards = document.querySelector(".card");

async function fn1() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok)
      throw new Error(`Error fetching
     ${response.status}`);

    const res2 = await response.json();
    console.log(res2);

    res2.forEach(({ flags: { svg }, name: { official }, capital, region }) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `
            <div>
        <p>страна: ${official}</p>
        <p>столица: ${capital}</p>
        <p>регион: ${region}</p>
        <img src="${svg}" alt="">
          </div>
       `
      );
    });

    console.log(response);
  } catch (err) {
    console.error(`${err}`);
  }
}

fn1();

console.log('----------------------------------------------------------------')


// "use strict";
// const cards = document.querySelector(".card");

// async function fn1() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");

//     if (!response.ok) throw new Error(`Ошибка get запроса ${response.status}`);

//     const res2 = await response.json();
//     console.log(res2);

//     res2.forEach(({ flags: { svg }, name: { official }, capital, region }) => {
//       cards.insertAdjacentHTML(
//         "beforeend",
//         `
//       <div>
//         <p>страна: ${official}</p>
//         <p>столица: ${capital}</p>
//         <p>регион: ${region}</p>
//         <img src="${svg}" alt="">
//     </div>
//       `
//       );
//     });

//     console.log(response);
//   } catch (err) {
//     console.error(`${err}`);
//   }
// }

// fn1();

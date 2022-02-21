let vardas = prompt("Parašykite savo vardą");
let pavarde = prompt("Parašykite savo pavardę");
let menesis = prompt("Parašykite savo gimimo mėnesio skaičių");
let diena = prompt("Parašykite savo gimimo dienos skaičių");
let skaicius = prompt("Parašykite savo megstamiausią skaičių");

// console.log(vardas);
// console.log(pavarde);
// console.log(menesis);
menesis = Number(menesis);
// console.log(diena);
diena = Number(diena);
// console.log(skaicius);
skaicius = Number(skaicius);

// IKRENTA I HTML//

// 1//___________________________
// const sakinys =
//   "Mano draugas " +
//   vardas +
//   " " +
//   pavarde +
//   " yra gimes " +
//   menesis +
//   " men " +
//   diena +
//   " diena";

// const paraEl = document.getElementById("render");
// console.log(paraEl);

// paraEl.textContent = sakinys;

// 2//___________________________

// const sakinys =
//   "Vardas: " +
//   vardas +
//   ", Pavarde: " +
//   pavarde +
//   " ir sudejus jo gimimo men ir diena gaunama " +
//   (menesis + diena);

// const paraEl = document.getElementById("render");
// console.log(paraEl);

// paraEl.textContent = sakinys;

// 3//___________________________

// const sakinys =
//   "Vartotojas ivede skaicius " +
//   menesis +
//   ", " +
//   diena +
//   ", " +
//   skaicius +
//   ". " +
//   "Ju suma yra " +
//   (diena + menesis + skaicius) +
//   ", o daugyba yra " +
//   diena * menesis * skaicius;

// const paraEl = document.getElementById("render");
// console.log(paraEl);

// paraEl.textContent = sakinys;

// 4//___________________________

// const sakinys =
//   "visu ivestu skaiciu vidurkis yra " + (menesis * diena * skaicius) / 3;

// const paraEl = document.getElementById("render");
// console.log(paraEl);

// paraEl.textContent = sakinys;

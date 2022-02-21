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

// ISVESTI SAKINI "MANO DRAUGAS JONAS JONAITIS YRA GIMES 08 MEN 17 DIENA"

// console.log(
//   "Mano draugas " +
//     vardas +
//     pavarde +
//     " yra gimes " +
//     menesis +
//     " men " +
//     diena +
//     " diena"
// );

// ISVESTI VARDAS: JONAS, PAVARDE: JONAITIS; GIMIMO MEN IR DIENOS SUMA = 25;

// console.log(
//   "Vardas: " +
//     vardas +
//     ", Pavarde: " +
//     pavarde +
//     " ir sudejus jo gimimo men ir diena gaunama " +
//     (menesis + diena)
// );

// ISVESTI: VARTOTOJAS IVEDE SKAICIUS 08, 17, 11. JU SUMA YRA 36, O DAUGYBA YRA 1496.

// console.log(
//   "Vartotojas ivede skaicius " +
//     menesis +
//     ", " +
//     diena +
//     ", " +
//     skaicius +
//     ". " +
//     "Ju suma yra " +
//     (diena + menesis + skaicius) +
//     ", o daugyba yra " +
//     diena * menesis * skaicius
// );

// ISVESTI: VISU ISVESTU SKAICIU VIDURKIS YRA 498.666666667

// console.log(
//   "visu ivestu skaiciu vidurkis yra " + (menesis * diena * skaicius) / 3
// );

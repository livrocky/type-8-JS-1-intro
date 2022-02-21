"use strict";
// 1. susikurti kintamuosius vardas, salis, megstamiausiasSkaicius, megstamiausia savaites diena
let vardas = "Rokas";
let salis = "Portugalija";
let megSk = 17;
let savDn = 5;

console.log(vardas);
console.log(salis);

const daugyba = megSk * savDn;
console.log(daugyba);

//   "as esu John. noreciau keliauti i Jamaika. mano megstamiausias skaicius yra 777";

const sakinys = "as esu " + vardas + ".";
const sak2 = " Noreciau keliauti i " + salis + ".";
const sak3 = " Mano megstamiausias skaicius yra " + megSk;
console.log(sakinys + sak2 + sak3);

//render el nusitaikom i rendel el
const paraEl = document.getElementById("render");
console.log(paraEl);

//pakeiciam jo teksta
paraEl.textContent = sakinys + sak2 + sak3;
// paraEl.innerHTML = sakinys + sak2 + sak3;

y5 = 50;

//camel case
const patsMegstamiausiasManoSkaiciusYra = 777;
//snake case
const pats_Megstamiausias_Mano_Skaicius_Yra = 777;

"use strict";
// // -----------ichma ich funcsiya 3talik----------

// let ichmaIch = function (a) {
//   return function (c, d) {
//     return function (e, f) {
//       return a * c + (a - f + e) * d;
//     };
//   };
// };
// let x = ichmaIch(1);
// let y = x(2, 3);
// console.log(y(4, 5));

// // -----------func.ni arg. sifatida berish---------------

// function add(a, b) {
//   return a + b;
// }
// function math(c, addFunc) {
//   return c + addFunc;
// }
// console.log(math(5, add(2, 3)));

// ------------so`zni katta kichik qilib beradi----------

// let gap = prompt("gapni kirit");

// function kattaHarf(suz) {
//   console.log(suz.toUpperCase());
// }
// function kichikHarf(suz) {
//   console.log(suz.toLowerCase());
// }
// function birinchiHarf(suz) {
//   let arr = suz.split("");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }
//   let str1 = suz.join(" ");
//   console.log(str1);
// }
// let yoz = function (suz, func) {
//   func(suz);
// };
// yoz(gap, birinchiHarf);
// // ------------------calc funcsiya----------------

// let qush = function (a, b) {
//   console.log(a + b);
// };

// let ayir = function (a, b) {
//   console.log(a - b);
// };

// let kup = function (a, b) {
//   console.log(a * b);
// };

// let bul = function (a, b) {
//   console.log(a / b);
// };
// let calc = function (x, y, fn) {
//   fn(x, y);
// };
// calc(10, 5, bul);

// --------call, apply bilan funcga qo`shish---------

// let TDTU = {
//   names: "TDTU",
//   age: 89,
//   facultets: 9,
//   results(a, b) {
//     console.log(`O'zbekiston bo'yicha: ${a}
//     Jahonda: ${b} o'rinda turadi`);
//   },
// };

// let result = TDTU.results;
// let arr = [2, 54];

// let TATU = {
//   names: "TATU",
//   age: 50,
//   facultets: 5,
// };

// // call
// result.call(TATU, ...arr);
// // apply
// result.apply(TATU, arr);
// bind;
// let newResult = result.bind(TATU, 2, 54);
// newResult();

// ----------btn--------

// let phone={
//   names:'button'
// };
// phone.btn=0;
// phone.buy=function(){
//   console.log(++this.btn)
// }
// console.log(phone.btn);
// let func1=phone.buy.bind(phone)
// document.querySelector(".btn").addEventListener("click",func1)
// console.log(phone)

// --------closures---------------------------------------------------
// let func = function () {
//   let sum = 1;
//   return function (a) {
//     console.log((sum = sum * a));
//   };
// };
// let x = func();
// x(2);
// x(5);
// x(7);
// x(6);
// x(8);

// -------simple array methods----------------

// let arr = ["u", "m", "i", "d", "9"];
// console.log(arr);
// // shuni oladi
// console.log(arr.slice(0, 3));
// console.log(arr.slice(-2));
// // olib tashlaydi
// console.log(arr.slice(4));
// console.log(arr.slice(0, -3));

// let arr = ["s", "a", "l", "o", "m", "a", "t"];
// arr.splice(0, 2);
// console.log(arr);

// let arr1 = ["s", "a", "l"];
// let arr2 = ["s", "a", "l"];
// let arr3 = ["s", "a", "l"];
// let arr4 = ["s", "a", "l"];
// arr4 = arr4.concat(arr1, arr2, arr3);
// console.log(arr4);

// let arr1 = ["s", "a", "l"];
// let arr2 = ["s", "a", "l"];
// let arr3 = ["s", "a", "l"];
// let arr4 = ["s", "a", "l"];
// arr4 = arr4.join("-")
// console.log(arr4);

// ---------forIch----------

// let arr1 = ["s", "a", "l", "o", [1, 2, 3]];
// arr1.forEach(function (val, key, entries) {
//   console.log(key);
// });

// ----------magic click--------------

// let bekClick = {
//   names: "Bekzod Baratov",
//   balance: 1000,
//   transaction: [],
//   cardNum: 5775
//   pin: 1111,
// };
// let jafarClick = {
//   names: "Jafar",
//   balance: 2000,
//   transaction: [],
//   cardNum: 1446
//   pin: 2222,
// };
// let arr = [bekClick, jafarClick];
// let utkazma = function (arr) {
//   let pinCode = Number(prompt("parolni kirit:"));
//   for (let elem of arr) {
//     if (pinCode === elem.pin) {
//       console.log(`sizning balancingiz ${elem.balance}`);
//       console.log(`Account: ${elem.names}`);

//       let surash=Number(prompt("siz pul junatmoqchimisiz ha bolsa 1, yoq bolsa 0"))
//       if(surash===1){
//         let pul=Number(prompt("qancha pul junatmoqchisiz"));
//         if(pul<elem.balance){
//           let card=Number(prompt("karta raqamini kiriting"))
//           for(let el of arr){
//             if(card===el.cardNum){
//               console.log(`qabul qiluvchi: ${el.pul}`)
//               elem.balance=elem.balance-pul;
//               el.balance=el.balance+pul
//             }
//           }
//         }
//       }
//     }

//   }

// };
// utkazma(arr);
// ------------------------
// let valyuta = new Map([
//   ["USD", "America dollari"],
//   ["UZS", "O`zbekiston sumi"],
//   ["RUB", "Rossiya rubli"],
// ]);

// valyuta.forEach(function (val, key) {
//   console.log(`Valyuta: ${key} --> ${val}`);
// });

// ---------------Data formation map-------------

// let arr = [25, 30, 40, 55, 52];
// let dollor = [25, 30, 40, 55, 52];
// let kurs = 10975;
// --map
// let x = arr.map(function (val) {
//   return val;
// });
// console.log(x);

// let doll = dollor.map(function (val) {
//   return val * kurs;
// });
// console.log(doll);

// --filter

// let x1 = arr.filter(function (val) {
//   return val > 50;
// });
// console.log(x1);

// let doll1 = dollor.filter(function (val) {
//   return val * kurs < 500000;
// });
// console.log(doll1);

// -------------------------------------------
// -----------reduce method----------------------
// let arr = [1, 7, 11, 9, 5, 6];
// let y = arr.reduce(function (tupla, val) {
//   return tupla + val;
// }, 0);
// console.log(y);

// let arr = [12, 7, "salom", 11, 9, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (sum < arr[i]) {
//     sum = arr[i];
//   }
// }
// console.log(sum);
// let max = arr.reduce(function (katta, val) {
//   if (katta > val) return val;
//   else return katta;
// }, arr[0]);
// console.log(max);

// ----------------some and every methods------------
// let arr = [3, 8, 4, -9, 1, 6, -7, 2];
// let boolean = arr.some((val) => val > 0);
// let boolean2 = arr.every((val) => val > 2);

// console.log(boolean); //true
// console.log(boolean2); //fasle

// -------------flat methods--------------
// let arr1 = [1, 2, 3, 4, 5, 6, [7, 8]];
// let arr2 = [6, 7, [14, 65], 45, [85, 3]];
// let arr3 = [56, [45, 12, [45, 12, [65, 85]]]];

// let arrs = [arr1, arr2, arr3];
// let och = arrs.map((val) => val.flat(10));
// console.log(och);

// ----------sort metoth-----------------
// let arr = [3, 8, 4, "a", 1, 6, -7, 2];
// console.log(arr.sort());

// --------------------------------
// let s = "fhkasfmagsadidadsacsadjsodaft";
// s = s.toLowerCase();
// let arr = [...s];
// let push2 = ["m", "a", "g", "i", "c", "s", "o", "f", "t"];
// let push1 = [];

// for (let i = 0; i < arr.length; i++) {
//   if ("m" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("a" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("g" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("i" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("c" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("s" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("o" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("f" == arr[i]) {
//     push1.push(arr[i]);
//   } else if ("t" == arr[i]) {
//     push1.push(arr[i]);
//   }
// }
// push1 = new Set(push1);

// console.log(push1);

// ------------Fill and from methods----------------------------
// let x = [];
// x = new Array(20);
// for (let i = 0; i < x.length; i++) {
//   x.fill(i + 1, i, i + 1);
// }
// let tup = [];
// let x = Array.from({ length: 20 }, function (val, key) {
//   return key + 1;
// });
// let y = Array.from({ length: 50 }, function (val, key) {
//   return 2 * key + 1;
// });
// let z = Array.from({ length: 50 }, function (val, key) {
//   return 2 * key;
// });
// console.log(x);
// console.log(y);
// console.log(z);

// ------------------------
// let son;
// let bul;
// let tub = [];
// let bu_tub_son;
// for (son = 1; son < 100; son++) {
//   bu_tub_son = true;
//   for (bul = 2; bul < son; bul++) {
//     if (son % bul == 0) {
//       bu_tub_son = false;
//       break;
//     }
//   }
//   if ((bu_tub_son = true)) {
//     tub.push(son);
//   }
//   // console.log(son);
// }

// ----------------from-----
// let arr = [10, 20, 30, 40, 50, 60];
// let me = Array.from(arr, function (val, key) {
//   return val * 10;
// });
// // console.log(me);

// let z = new Array(20);
// for (let i = 0; i < arr.length; i++) {
//   z.fill(arr[i], i, i + 1);
// }

// console.log(z);
// ----------------------------------
// console.log(typeof (2.29999).toFixed(2));
// let x = +"24";
// console.log(typeof x);
// console.
// -----------array yigindisi-----------------
// let arr = [2, 3, 4, 6];
// arr = arr.reduce((son, val) => son + val);
// console.log(arr);
// -----------arraylarni solishtirish----------
// let a = [3, 5, 4, 6];
// let b = [2, 3, 6, 6];
// let at = 0;
// let bt = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > b[i]) {
//     at++;
//   } else if (a[i] < b[i]) {
//     bt++;
//   }
// }
// let arr = [at, bt];
// console.log(arr);
// --------------arrayning katta sonlari yigindisi
// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 10000000005];
// arr = arr.reduce((son, val) => son + val);
// console.log(arr);
// --------------
// let new1 = function () {
//   let arr = [2, -3, 6, -6, 0, -11];
//   let u = arr.length;
//   let t = 0;
//   let k = 0;
//   let g = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       t++;
//     } else if (arr[i] < 0) {
//       k++;
//     } else {
//       g++;
//     }
//   }
//   console.log()
// let b =
//   return arrSum;
// };

// -----------matritsa matrix-----------------
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let a = 0;
// let b = 0;

// for (let i = 0; i < arr.length; i++) {
//   a = a + arr[i][i];
//   b = b + arr[i][arr.length - 1 - i];
// }
// let m = Math.abs(a - b);
// -----------staricase - zinapoya-----------
// let n = 5;
// let x = 0;
// let s = "#";
// for (let i = 0; i <= n; i++) {
//   s = s.replace("", " ");

//   console.log(s);
// }

// function solution(digits) {
//   let s = [];
//   for (var i = 0; i < digits.length - 4; i++) {
//     s.push(digits.substr(i, 5));
//   }
//   return Math.max(...s);
// }
// solution(15354697);

// ----------------Two Cat and Mouse-----------------------------
// Ikki mushuk va sichqon chiziqda turli pozitsiyalarda. Sizga ularning boshlang'ich pozitsiyalari beriladi. Sizning vazifangiz qaysi
//  mushuk sichqonchani birinchi bo'lib yetib borishini aniqlashdir, sichqoncha harakat qilmaydi va mushuklar bir xil tezlikda sayohat qiladi.
//  Agar mushuklar bir vaqtning o'zida yetib kelishsa, sichqonchani harakatga keltirishga ruxsat beriladi va ular jang qilayotganda u qochib ketadi.

// Sizga A va B mushuklari va S sichqonchasi uchun tegishli pozitsiyalarni ifodalovchi ,x,y va z ko'rinishidagi q so'rovlar beriladi. Har bir so'rovga
//  yangi satrda chop etiladigan tegishli javobni qaytarish uchun CatAndMouse funktsiyasini bajaring.

// Agar mushuk A sichqonchani birinchi bo'lib tutsa, A mushukini chop eting.
// Agar mushuk A sichqonchani birinchi bo'lib tutsa, B mushukini chop eting.
// Agar ikkala mushuk bir vaqtning o'zida sichqonchaga etib borsa, ikkita mushuk urishganda va sichqonchani qochib ketayotganda S sichqonchani chop eting.

// x (cat A) joylashish nuqtasi, y (cat B) joylashish nuqtasi, z (mouse C) joylashish nuqtasi,
// Example
// x=2
// y=5
// z=4

// kordinatalar o`qida tasavvur qilsak x nuqtaga nisbatan y nuqta z ga yaqin
// shuning uchun y (cat B) sichqonga tezroq yetib boradi.

// kiruvchi ma`lumot
// 1 2 3

// 1 -> Cat A
// 2 -> Cat B
// 3 -> Mouse C

// Chiquvchi malumot
// Cat B

// function catAndMouse(x, y, z) {
//   if (Math.abs(z - x) < Math.abs(z - y)) {
//     return "Cat A";
//   } else if (Math.abs(z - x) > Math.abs(z - y)) {
//     return "Cat B";
//   } else {
//     return "Mouse C";
//   }
// }
// console.log(catAndMouse(1, 2, 3));
// console.log(catAndMouse(1, 3, 2));

// ---------------Zina------------------------------

// Sizga n argumentli funcsiya berilgan va bu funcsiyaning argumenti
// ustunlar va satrlar soni hisoblanadi.

// Example
// n=4

// Answer

// ___#
// __##
// _###
// ####

// Bu yerda tag chiziq (_) bo`sh joy hisoblanadi.

// function zina(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n, "_"));
//   }
// }
// zina(5);

// -------2 ning darajasida topish---------------------------
// let x = 257;
// let i = 0;
// let y = x;
// while (y > 1) {
//   y = x / 2 ** i;
//   i++;
// }
// console.log(i - 2);
// --------------------parse methods----------------------
// console.log(Number.parseInt("sa24"));
// console.log(Number.parseInt("24son"));
// console.log(Number.parseInt("1 24 son 14"));
// console.log(Number.parseInt("24 son 14"));
// console.log(Number.parseFloat("24.85621 son"));
// console.log(Number.isNaN(Number.parseFloat("sa 12")));
// console.log(Number.isFinite(23));
// console.log(Number.isInteger(23 / 0));
// -------------Math methods-------------
// let a = 23.5;
// let arr = [3, 8, 9, 1, 5, 65, 1, 7, "111"];
// let p = Math.sqrt(81);
// let q = Math.pow(27, 3);
// let r = Math.min(...arr);
// let s = Math.max(...arr);
// let k = Math.trunc(Math.random() * 2) * 10 + 100;
// console.log(k);

// let rand = function (n, m) {
// let r = Math.trunc(Math.random() * (m - n + 1)) + n;
//   console.log(r);
// };
// rand(15, 18);

// console.log(Math.round(1.5));
// console.log(Math.trunc(1.5));
// console.log(Math.trunc(-1.5));
// console.log(Math.floor(1.5));
// console.log(Math.floor(-1.5));
// console.log(Math.ceil(1.5));
// console.log(Math.pow(81, 1 / 4));
// ------------sonlarni harflarda berish----------------------
// let x = "1826";
// let arr = x.split("");
// arr = arr.map((val) => Number(val));
// let [minglik, yuzlik, unlik, birlik] = [...arr];
// let strArr = [];
// switch (birlik) {
//   case 0:
//     "";
//     break;
//   case 1:
//     strArr.unshift("bir");
//     break;
//   case 2:
//     strArr.unshift("ikki");
//     break;
//   case 3:
//     strArr.unshift("uch");
//     break;
//   case 4:
//     strArr.unshift("to`rt");
//     break;
//   case 5:
//     strArr.unshift("besh");
//     break;
//   case 6:
//     strArr.unshift("olti");
//     break;
//   case 7:
//     strArr.unshift("yetti");
//     break;
//   case 8:
//     strArr.unshift("sakkiz");
//     break;
//   case 9:
//     strArr.unshift("to'qqiz");
//     break;

//   default:
//     break;
// }

// switch (unlik) {
//   case 1:
//     strArr.unshift("o'n");
//     break;
//   case 2:
//     strArr.unshift("yigirma");
//     break;
//   case 3:
//     strArr.unshift("o'ttiz");
//     break;
//   case 4:
//     strArr.unshift("qirq");
//     break;
//   case 5:
//     strArr.unshift("ellik");
//     break;
//   case 6:
//     strArr.unshift("oltmish");
//     break;
//   case 7:
//     strArr.unshift("yetmish");
//     break;
//   case 8:
//     strArr.unshift("sakson");
//     break;
//   case 9:
//     strArr.unshift("to'qson");
//     break;

//   default:
//     break;
// }

// switch (yuzlik) {
//   case 1:
//     strArr.unshift("bir yuz");
//     break;
//   case 2:
//     strArr.unshift("ikki yuz");
//     break;
//   case 3:
//     strArr.unshift("uch yuz");
//     break;
//   case 4:
//     strArr.unshift("to`rt yuz");
//     break;
//   case 5:
//     strArr.unshift("besh yuz");
//     break;
//   case 6:
//     strArr.unshift("olti yuz");
//     break;
//   case 7:
//     strArr.unshift("yetti yuz");
//     break;
//   case 8:
//     strArr.unshift("sakkiz yuz");
//     break;
//   case 9:
//     strArr.unshift("to'qqiz yuz");
//     break;

//   default:
//     break;
// }

// switch (minglik) {
//   case 1:
//     strArr.unshift("bir ming");
//     break;
//   case 2:
//     strArr.unshift("ikki ming");
//     break;
//   case 3:
//     strArr.unshift("uch ming");
//     break;
//   case 4:
//     strArr.unshift("to`rt ming");
//     break;
//   case 5:
//     strArr.unshift("besh ming");
//     break;
//   case 6:
//     strArr.unshift("olti ming");
//     break;
//   case 7:
//     strArr.unshift("yetti ming");
//     break;
//   case 8:
//     strArr.unshift("sakkiz ming");
//     break;
//   case 9:
//     strArr.unshift("to'qqiz ming");
//     break;

//   default:
//     break;
// }
// console.log(strArr.join(" "));

// ---------------------------------------------------------------------
// let x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// console.log(2 ** 53 - 1);
// // 9007199254740991
// console.log(BigInt(2 ** 120));
// // 1329227995784915872903807060280344576n
// console.log(2 ** 120);
// // 1.329227995784916e+36
// -------------Creating date------------------------
// let hozir = new Date();
// let kecha = new Date(10 * 24 * 60 * 60 * 1000);
// // let kecha2 = new Date(2000, 09, 08).getTime();
// let utjanKun = new Date("march, 13, 2022");
// console.log(hozir);
// console.log(kecha);
// // console.log(kecha2);
// console.log(utjanKun);
// let hozir = new Date();
// let yil = hozir.getFullYear();
// let oy = hozir.getMonth() + 1;
// let hafta = hozir.getDay();
// let kun = hozir.getDate();
// let soat = hozir.getHours();
// let minut = hozir.getMinutes();
// let sekund = hozir.getSeconds();
// let millisekund = hozir.getMilliseconds();

// let qoida = hozir.toISOString();
// console.log(qoida);

// let qush = 5 * 365 * 24 * 60 * 60 * 1000;
// let hozi = new Date().getTime();
// qush = qush + hozi;
// let yangi = new Date(qush);

// console.log(yangi);
// console.log(hozir.setFullYear(2040));
// console.log(hozir);

// -----------------array max bilan va min bilan ishlash
// function miniMaxSum(arr) {
//   let a = 0;
//   let yig = arr.reduce((sum, val) => sum + val);
//   let x1 = yig - Math.max(...arr);
//   let x2 = yig - Math.min(arr);

//   console.log(x1);
//   console.log(x1, x2);
// }
// miniMaxSum([1, 2, 3, 4, 5]);

// -------------soat billan isjjlash----------------
// function timeConversion(s) {
//   let x = [...s];
//   x.shift();
//   let d;
//   let k;

//   for (let el of x) {
//     if (el == "P") {
//       d = Number.parseInt(x) + 12;
//       k = x.replace("7", d);
//     }
//   }
//   // console.log(x);
//   console.log(k);
// }
// timeConversion("07:05:45PM");
// -----------------------------------------
// alert(
//   "sizga birinchi va ikkinchi sana orasida qancha vaqt borligini aniqalab beramiz."
// );
// let kirit1 = new Date(
//   prompt("yy,mm,dd ko`rinishida sanani kiriting maslan: 2022,03,24")
// ).getTime();
// let kirit2 = new Date(
//   prompt("yy,mm,dd ko`rinishida sanani kiriting maslan: 2022,03,24")
// ).getTime();

// let vaqtlar = Math.abs(kirit1 - kirit2);
// alert(new Date(vaqtlar));

// console.log(vaqtlar);

// ----------internalizationalizing-------------
// let hozirInt = new Date();
// let options = {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// let davlat = navigator.language;
// let uzb = new Intl.DateTimeFormat(davlat, options).format(hozirInt);
// console.log(uzb);

// sozlama----------------------
// let sozlama = {
//   style: "demical", //default

//   // style: "currency",
//   // currency:"GBR",

//   // style: "unit";
//   // unit:"celsious"

//   // style: "persent",
//   // useGrouping: false,
// };
// let convert = new Intl.NumberFormat("de-De", sozlama).format(a);
// let convert1 = new Intl.NumberFormat("ar-SY", sozlama).format(a);
// let convert2 = new Intl.NumberFormat("uz-UZ", sozlama).format(a);

// -------------setTimeout------------------
// let z = 2;
// let zz = 4;
// setTimeout(
//   function (z, zz) {
//     console.log(z + zz);
//   },
//   5000,
//   z,
//   zz
// );

// let age = prompt("  ");
// let t = setTimeout((a) => {
//   console.log(a);
// }, 3000);

// if (age < 18) {
//   clearTimeout(t);
// }

// ------------setInterval-----------------
// setInterval(() => {
//   console.log("salom");
// }, 2000);
// -------------soat yasash---------------

let soat = document.querySelector(".hour");
let minut = document.querySelector(".minut");
let secund = document.querySelector(".second");

let hozir = new Date();

soat.textContent = String((hozir.getHours() + "").padStart(2, "0"));
minut.textContent = String((hozir.getMinutes() + "").padStart(2, "0"));
secund.textContent = String((hozir.getSeconds() + "").padStart(2, "0"));

setInterval(function () {
  let hozir = new Date();
  soat.textContent = String((hozir.getHours() + "").padStart(2, "0"));
  minut.textContent = String((hozir.getMinutes() + "").padStart(2, "0"));
  secund.textContent = String((hozir.getSeconds() + "").padStart(2, "0"));
}, 1000);
// --------------------------------------
// ----------OOP----------------------
// ------contructor funcsiya----------
// const Mashina = function (nom, age, price) {
//   this.nom = nom;
//   this.age = age;
//   this.price = price;
// };
// Mashina.prototype.cost = function () {
//   return this.price * 0.7;
// };

// let Cobalt = new Mashina("Cobalt", 2020, 13000);
// let lacetti = new Mashina("Lacetti", 2019, 12000);

// console.log(Cobalt);
// console.log(Cobalt.cost());
// console.log(lacetti);
// console.log(lacetti.cost());
// console.log(lacetti.__proto__);
// console.log(Mashina.prototype);

// ------------classlar-------
// class Guruh {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   func(el) {
//     console.log(el - this.age);
//   }
// }
// let men = new Guruh("Bekzod", 21);
// console.log(men);
// console.log(men.func(2022));

// console.time("loop");
// // ------------kirim chiqimni yaratish-------
// class Bank {
//   #name;
//   #age;
//   #pin;
//   #utkazmalar;
//   constructor(name, age, pin) {
//     this.#name = name;
//     this.#age = age;
//     this.#pin = pin;
//     this.#utkazmalar = [];
//   }
//   get pinOlish() {
//     return this.#pin;
//   }
//   get utkazmaOlish() {
//     return this.#utkazmalar;
//   }

//   set utkazmaQushish(val) {
//     this.#utkazmalar.push(val);
//   }
//   set utkazmaAyirish(val) {
//     this.#utkazmalar.push(-val);
//   }
//   set pinUzgartirish(val) {
//     this.#pin = val;
//   }
//   func() {
//     return this.#utkazmalar
//       .filter((val) => val > 0)
//       .reduce((sum, val) => sum + val);
//   }
//   set qarzBerish(val) {
//     if (val < this.func() / 10) {
//       this.#utkazmalar.push(val);
//     } else {
//       alert("sizga qarz yoq!");
//     }
//   }
// }
// let bekzod = new Bank("Bekzod", 21, 1111);

// // bekzod.utkazmaQushish = 200;
// // bekzod.utkazmaAyirish = 500;
// // bekzod.utkazmaQushish = 300;
// // console.log(bekzod.func());
// // bekzod.qarzBerish = 30;
// console.log(bekzod.pinOlish);
// console.log(bekzod);

// //

// console.timeEnd("loop");
// ---------------hackker rank---------------
// let arr1 = [];
// let arr2 = [];
// let sa;
// function kangaroo(x1, v1, x2, v2) {
//   for (x1; x1 < 10000; x1 += v1) {
//     arr1.push(x1);
//   }
//   for (x2; x2 < 10000; x2 += v2) {
//     arr2.push(x2);
//   }
//   for (let i = 0; i < 10000; i++) {
//     if (arr1[i] == arr2[i]) {
//       sa = "yes";
//     } else {
//       sa = "no";
//     }
//   }
//   return sa;
// }
// console.log(arr1, arr2);
// console.log(kangaroo(0, 2, 3, 5));
// ------------------------------
// let tekshir;
// let y1;
// let y2;
// function kangaroo(x1, v1, x2, v2) {
//   while (x1 != x2) {
//     if (x1 > 100000000 || x2 > 100000000) {
//       tekshir = "NO";
//       break;
//     } else {
//       x1 = x1 + v1;
//       x2 = x2 + v2;
//     }
//   }
//   if (x1 == x2) {
//     tekshir = "YES";
//   }
//   return tekshir;
// }
// console.log(kangaroo(4523, 8092, 9419, 8076));
// // 1408 6689 6730 4028
// -------------------------------------
// let s = 0;
// let k = 0;
// let son1 = 0;
// let son2 = 0;
// function breakingRecords(scores) {
//   son1 = scores[0];
//   son2 = scores[0];
//   for (let i = 0; i < scores.length; i++) {
//     if (son1 < scores[i]) {
//       son1 = scores[i];
//       s++;
//     }
//     if (son2 > scores[i]) {
//       son2 = scores[i];
//       k++;
//     }
//   }
//   return [s, k];
// }
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// ----------------------------------------------
// let s = [1, 2, 1, 3, 2];
// let d = 3;
// let m = 2;
// let count = 0;
// function birthday(s, d, m) {
//   for (let i = 0; i < s.length; i++) {
//     let arr = s.slice(0 + i, m + i);

//     if (arr.reduce((a, b) => a + b) == d) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(birthday(s, d, m));
// --------------------------------------
// let t;
// let f;
// function hurdleRace(k, height) {
//   t = height[0];
//   for (let i = 0; i < height.length; i++) {
//     if (t < height[i]) {
//       t = height[i];
//     }
//   }
//   t < k ? (f = 0) : (f = t - k);
//   return f;
// }
// let height = [2, 6, 4, 5, 2];
// let k = 2;
// console.log(hurdleRace(k, height));
// ----------------------------------------
// let charHeight;
// function designerPdfViewer(h, word) {
//   let height = 0;
//   let len = word.length;

//   for (let char of word) {
//     charHeight = h[char.charCodeAt() - 97];
//     height = Math.max(charHeight, height);
//     console.log(char.charCodeAt() - 97);
//   }
//   // return height * len;
// }
// let h = [
//   1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
// ];
// let word = "lbka";
// designerPdfViewer(h, word);
// ----------------------------------------------
// let Person = function (names, age) {
//   this.names = names;
//   this.age = age;
// };
// Person.prototype.porto = function () {
//   return this.age;
// };

// let Teacher  = function (names, age, fan, oylik) {
//   this.names = names;
//   this.age = age;
//   this.fan = fan;
//   this.oylik = oylik;
// };
// Teacher.prototype = Object.create(Person.prototype);

// Teacher.prototype.dollor = function () {
//   return `${Number.parseInt(this.oylik / 12000)}$`;
// };

// let bekzod = new Teacher("bekzod", 21, "math", 2000000);
// let samandar = new Person("samandar", 25);

// console.log(samandar);
// console.log(bekzod);
// console.log(bekzod.dollor());
// console.log(samandar.porto());
// console.log(bekzod.porto());
// console.log(Teacher.prototype);
// console.log(Person.prototype);

// ------------------------------------------------------------
// class People {
//   constructor(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   }
//   yoshi() {
//     return 2022 - this.yosh;
//   }
// }
// class Student extends People {
//   constructor(ism, yosh, fakultet) {
//     super(ism, yosh);
//     this.fakultet = fakultet;
//   }
// }

// const bek = new Student("bekzod", 21, "AI");

// console.log(bek);
// console.log(bek.yoshi());
// -----------------------------------------------
// const Person = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
//   qush1(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//     console.log(this.yosh);
//   },
// };
// console.log(Person);
// const Student = Object.create(Person);
// Student.qush = function (ism, yosh, fakultet) {
//   Person.qush.call(ism, yosh);
//   this.fakultet = fakultet;
// };

// console.log(Student);
// const umid = Object.create(Student);

// Student.tanish = function () {
//   console.log(`I am ${this.ism}`);
// };
// console.log(Student.__proto__.qush1());
// --------------------------------
// class University {
//   #nomi;
//   constructor(nomi, soni) {
//     this.#nomi = nomi;
//     this.soni = soni;
//     this._pinCode = 1111;
//   }
//   _parolUzgar(val) {
//     this._pinCode = "1" + val + "1";
//   }
//   parolUchun(val) {
//     let a = "5" + val + "5";
//     this._parolUzgar(a);
//   }
//   #nomiUzgar(val) {
//     this.#nomi = val;
//   }
//   #nomiUzgarniUzgartir(val) {
//     this.#nomiUzgar(val);
//   }
// }

// const tatu = new University("tatu", 10000);
// tatu.parolUchun(333);
// console.log(tatu);

// class Fakultet extends University {
//   constructor(nomi, soni, dekani) {
//     super(nomi, soni);
//     this.dekani = dekani;
//   }
// }
// let tatu1 = new Fakultet("TaTu", 11, 3432);

// console.log(tatu1);
// -------------------------------------------------------------
// class obj {
//   constructor(name) {
//     this.name = name;
//   }

//   nominiOl() {
//     console.log(this.name);
//   }
//   nominiUzgartir(val) {
//     this.name = val;
//     return this;
//   }
// }
// let nexia = new obj("nexia");
// console.log(nexia);

// nexia.nominiUzgartir("NEXIA").nominiOl();
// -----Hackerank----------------------------------------------------
// function viralAdvertising(n) {
//   let t = 2;
//   let k = 2;
//   for (let i = 2; i <= n; i++) {
//     t = Math.floor(t * 1.5);
//     k = k + t;
//   }
//   console.log(k);
// }
// viralAdvertising(3);
// -----------------------------------------------
// function saveThePrisoner(n, m, s) {
//   let z = Math.floor((m + s - 1) / n);
//   let j = m + s - 1 - z * n;
//   if (j == 0) {
//     j = n;
//   }

//   console.log(j);
// }
// saveThePrisoner(3, 7, 3);
// ---------------------------------------
// function circularArrayRotation(a, k, queries) {
//   let f = [];
//   let b = [];
//   for (let i = 0; i < k; i++) {
//     b.push(a[i]);
//   }
//   for (let j = 0; j < a.length; j++) {
//     f.push(b[queries[j]]);
//   }
//   return f;
// }

// let a = [1, 2, 3, 4];
// let k = 2;
// let queries = [0, 1, 2, 3];
// console.log(circularArrayRotation(a, k, queries));
// ---------------------------------------------
// function divisibleSumPairs(n, k, ar) {
//   let p = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if ((ar[i] + ar[j]) % k === 0) {
//         p++;
//       }
//     }
//   }
//   console.log(p);
// }
// let n = 6;
// let k = 3;
// let ar = [1, 3, 2, 6, 1, 2];
// divisibleSumPairs(n, k, ar);
// ----------------------------------------------------
// function migratoryBirds(arr) {
//   let sorted = arr.sort();
//   let count = 0;
//   let t = 0;
//   let ans;

//   for (let i = 0; i < arr.length; i++) {
//     sorted[i] === sorted[i + 1] ? count++ : (count = 0);

//     if (count > t) {
//       ans = sorted[i];
//       t = count;
//     }
//   }
//   return ans;
// }
// let arrr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// migratoryBirds(arrr);
// -------------------------------------------
// function permutationEquation(p) {
//   let g = [];
//   for (let i = 0; i < p.length + 1; i++) {
//     for (let j = 0; j < p.length; j++) {
//       if (i === p[j]) {
//         for (let k = 0; k < p.length; k++) {
//           if (j + 1 === p[k]) {
//             g.push(k + 1);
//           }
//         }
//       }
//     }
//   }
//   return g;
// }
// let p = [4, 3, 5, 1, 2];
// permutationEquation(p);
// -----------------------------------------------------
// function findDigits(n) {
//   return n
//     .toString()
//     .split("")
//     .filter((i) => n % parseInt(i) == 0).length;
// }
// let n = 35231534;
// findDigits(n);
// ------------------------------------------------------
// class Info {
//   constructor(nomi, nomeri) {
//     this.nomi = nomi;
//     this.nomeri = nomeri;
//   }
// }
// class Bino extends Info {
//   constructor(nomi, nomeri, ismi) {
//     super(nomi, nomeri);
//     this.ismi = ismi;
//   }
//   chiqar() {
//     console.log(this);
//   }
//   uzgartir(val) {
//     this.nomeri = val;
//     return this;
//   }
// }
// const child = new Bino(68, 606, "Abdusalomov A");
// console.log(child); //log bilan chiqarish
// child.chiqar(); //method orqali chhiqarish
// child.uzgartir(88).chiqar(); //bir necha methodlar orqali chiqarish
// --------------------------------------

// function timeConversion(s) {
//   let hours = s.getHours();
//   let minutes = s.getMinutes();
//   const ampm = hours >= 12 ? "pm" : "am";

//   hours %= 12;
//   hours = hours || 12;
//   minutes = minutes < 10 ? `0${minutes}` : minutes;

//   const strTime = `${hours}:${minutes} ${ampm}`;

//   return strTime;
// }

// console.log(timeConversion(new Date()));
// //////////////////////////////////////////////////////////////////////////
// fetch(`https://restcountries.com/v2/name/uzbekistan`)
//   .then(function (response) {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(function (res) {
//     let [data] = res;
//     console.log(data);
//   });
// ///////////////////////////////////////////////////

// const funcRet = async function () {
// const data = await fetch(`https://restcountries.com/v2/name/uzbekistan`);
// const data2 = await fetch(`https://restcountries.com/v2/name/usa`);
// const data3 = await fetch(`https://restcountries.com/v2/name/russia`);
// const dataJson = await data.json();
// console.log(dataJson);

//   const dat = await Promise.all([
//     fetch(`https://restcountries.com/v2/name/uzbekistan`),
//     fetch(`https://restcountries.com/v2/name/russia`),
//     fetch(`https://restcountries.com/v2/name/usa`),
//   ]);
//   console.log(dat);
// };
// funcRet();
////////////////////////////////////////////
// const dataRet = async function () {
//   const data = await Promise.all([
//     fetch(`https://restcountries.com/v2/name/uzbekistan`),
//     fetch(`https://restcountries.com/v2/name/russia`),
//     fetch(`https://restcountries.com/v2/name/usa`),
//   ]);

//   let timeout = function (sekund) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("sizning vaqtingiz tugadi");
//       });
//     }, sekund * 1000);
//   };
//   const data1 = await Promise.race([data, timeout(0.1)]);
//   console.log(data1);
// };
//////////////////////////////////////////////////////////////////////////////////
///////CANVAS////////////////////////////
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(0,128,0)";
// ctx.fillRect(20, 30, 50, 50);
// ctx.strokeRect(100, 100, 50, 50);

// ctx.rect(50, 50, 50, 50);
// ctx.stroke();

// ctx.lineWidth = 10;
// ctx.strokeStyle = "rgb(0,128,0)";
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 50);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(100, 150);
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
//////////////////////////////////////////////////

// function timeConversion(s) {
//   let t;
//   if (s.slice(-2) == "AM" && parseInt(s) == 12) {
//     t = `00` + s.slice(2, -2);
//   } else if (s.slice(-2) == "PM") {
//     t = `${(s.slice(0, 2) % 12) + 12}` + s.slice(2, -2);
//   } else {
//     t = s.slice(0, -2);
//   }
//   // return t;
//   console.log(t);
// }
// timeConversion("07:05:45PM");
//////////////////////////////////////////////////////
// function getMoneySpent(keyboards, drives, b) {
//   let qush = 0;
//   let qush1 = 0;
//   for (let el of keyboards) {
//     for (let el2 of drives) {
//       qush = el + el2;
//       // console.log(qush);
//       if (qush1 < qush && qush < b + 1) {
//         qush1 = qush;
//       }
//     }
//   }
//   if (qush1 == 0) {
//     return -1;
//   }
//   console.log(qush1);
//   return qush1;
// }

// let arr1 = [3, 1];
// let arr2 = [5, 2, 8];
// let b = 10;
// getMoneySpent(arr1, arr2, b);
///////////////////////////////////////////////////////////
// function gradingStudents(grades) {
//   let arr = [];
//   grades.forEach((grades) => {
//     if (grades % 5 > 2 && grades > 37) {
//       grades = Math.floor(grades / 5) * 5 + 5;
//     } else if (grades <= 37) {
//       grades = grades;
//     }
//     arr.push(grades);
//   });
//   return arr;
// }
// console.log(gradingStudents([73, 67, 38, 33]));
////////////////////////////////////////////////////////
// console.log();
// function beautifulDays(i, j, k) {
//   let z = 0;
//   let f;
//   let butun = 0;

//   for (let n = i; n <= j; n++) {
//     z = String(n).split("");

//     for (let m = 0; m < z.length - 1; m++) {
//       f = (n - Number(z[z.length - m - 1] + z[m])) / k;
//     }
//     if (Number.isInteger(f)) {
//       butun++;
//     }
//   }
//   return butun;
// }
// console.log(beautifulDays(200, 201, 100));
///////////////////////////////////////////////////////////

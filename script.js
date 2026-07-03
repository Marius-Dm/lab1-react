// // 1
// // 1.1
// var v1 = 1;
// let v2 = "Text";
// const v3 = true;

// console.log(`v1=${v1}, v2=${v2}, v3=${v3}`);

// //1.2
// function typeOfVar(p) {
//   return typeof p;
// }
// console.log(typeOfVar(v3));

// //1.3
// let x = "123";
// x = +x;
// let z = 456;
// z = String(z);

// console.log(`x = ${x}, z = ${z}`);

// //1.4
// let nume = "John";
// let varsta = 24;

// console.log(`Hi, my name is ${nume}, Im ${varsta} years old.`);

// //1.5
// let temp = nume;
// nume = varsta;
// varsta = temp;
// console.log(`Hi again,now my name is ${nume}, Im ${varsta} years old.`);

// //1.6
// function checkIfExist(v) {
//   return v === null || v === undefined;
// }

// checkIfExist(null);
// //1.7
// const obj1 = {
//   name: "Mark",
//   age: "22",
//   male: true,
// };
// delete obj1["age"];

// console.log(obj1);

// //1.8
// let arr1 = [1, "two", true, { age: 24 }, [1, 2, 3]];
// console.log(arr1);

// //2
// //2.1
// function suma(a, b) {
//   return a + b;
// }
// console.log(suma(1, 2));

// //2.2
// function aria(l, h = 3) {
//   return l * h;
// }
// console.log(aria(2, 5));

// //2.3
// const patrat = function (a) {
//   return a * a;
// };
// console.log(patrat(3));

// //2.4
// function upper(str) {
//   return {
//     up: str.toUpperCase(),
//     len: str.length,
//   };
// }
// console.log(upper("hi my man"));

// //2.5
// function dublu(a) {
//   return a * 2;
// }
// function solyanka(a) {
//   return {
//     dub: dublu(a),
//     pat: patrat(a),
//   };
// }
// console.log(solyanka(4));

// //2.6
// const sumaAgain = (a, b) => {
//   return a + b;
// };

// console.log(sumaAgain(2, 3));

// //2.7
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function smthn(arr) {
//   const arrTemp = [];
//   arr.forEach((element) => {
//     arrTemp.push(patrat(element));
//   });
//   console.log(String(arrTemp));
// }

// smthn(arr2);

// //3
// //3.1
// const masina = {
//   marca: "Toshiba",
//   model: "Honda",
//   an: 1994,
// };
// //3.2
// console.log(`marca: ${masina.marca}, model:${masina.model}`);
// console.log(`marca: ${masina["marca"]}, model:${masina["model"]}`);
// //3.3
// masina.culoare = "Bumblebee";
// masina.an = 2000;

// //3.4
// delete masina.model;
// console.log(masina);

// //3.5
// for (const key in masina) {
//   const element = masina[key];
//   console.log(`key:${key}, value:${element}`);
// }
// //3.6
// masina.descriere = function () {
//   let str = "";
//   for (const key in this) {
//     if (typeof this[key] !== "function") {
//       str += `${key}: ${this[key]}, `;
//     }
//   }
//   return str.slice(0, -2);
// };

// console.log(masina.descriere());
// //3.7
// const persoana = {
//   nume: "John",
//   varsta: 24,
// };
// function mesaj({ nume, varsta }) {
//   return `nume: ${nume}, varsta: ${varsta}`;
// }
// console.log(mesaj(persoana));

// //3.8
// let hasCuloareaKey = false;
// for (const key in masina) {
//   if (!Object.hasOwn(masina, key)) continue;
//   if (key === "culoare") {
//     hasCuloareaKey = true;
//   }
// }
// console.log(`Are obiectul masina prop. culoarea? -> ${hasCuloareaKey}`);

// //3.9
// const casa = {
//   adresa: {
//     strada: "str. Sessamme",
//     oras: "fig ego znaet",
//   },
// };
// //3.10
// function createStudent(nume, varsta, nota) {
//   return {
//     nume,
//     varsta,
//     nota,
//   };
// }
// console.log(createStudent("Bob", 25, 8));
// //3.12
// function adunare(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// function scadere(...numbers) {
//   return numbers.reduce((accumulator, num) => accumulator - num);
// }

// function inmultire(...numbers) {
//   return numbers.reduce((total, num) => total * num, 1);
// }

// function impartire(...numbers) {
//   if (numbers.length === 0) return 0;
//   return numbers.reduce((accumulator, current) => accumulator / current);
// }

// const calculator = {
//   adunare,
//   scadere,
//   inmultire,
//   impartire,
// };
// //3.13
// const { marca, culoare, an } = masina;

// console.log(`${marca}, ${culoare}, ${an}`);

//4 Arrays
//4.1
const arr1 = ["Chisinau", "Orhei", "Lipcani"];
console.log(arr1[0]);
//4.2
arr1.push("Cahul");
arr1.unshift("Balti");
console.log(String(arr1));
//4.3
const culori = ["alb", "rosu", "verde", "violet", "negru"];
for (let i = 0; i < culori.length; i++) {
  console.log(culori[i]);
}
//4.4
const animale = [
  "dog",
  "cat",
  "parrot",
  "whale",
  "whale",
  "horse",
  "fox",
  "dog",
];
animale.forEach((element, index) => {
  console.log(`Personalized message ${index + 1}: ${element} :)`);
});

//4.5
const numArray = [1, 20, 12, 4, 5, 410, 9, 67];
console.log(numArray.filter((element) => element > 10));

//4.6
const sortedArray = numArray.sort((a, b) => a - b);
console.log(sortedArray);

//4.7
const squareNumArray = numArray.map((element) => element * element);
console.log(squareNumArray);

//4.8
const sumOfArray = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(sumOfArray);

//4.9
console.log(numArray.includes(4));
console.log(numArray.indexOf(21) !== -1);

//4.10
const mashedArrays = animale.concat(culori);
console.log(mashedArrays);

const mashedArrays2 = [...animale, ...culori];
console.log(mashedArrays2);

//4.11
const bidon = [
  [1, 2],
  [3, 4],
];
console.log(bidon[1][0]);

//4.12
const noDupes = [...new Set(animale)];
console.log(noDupes);

const noDupesFilter = animale.filter(
  (element, index) => animale.indexOf(element) === index,
);
console.log(noDupesFilter);

//4.13
const newSlicedArray = numArray.slice();
newSlicedArray.splice(1, 1);
console.log(newSlicedArray);

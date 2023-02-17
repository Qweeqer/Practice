// let arr = [5, 6, 7, 8, [1, 2 ], 9];
// let arr2 = ["H", "I", "J", "K", "L"];
// let arr3 = [...arr2, ...arr];
// let arr4 = arr2.concat(arr);
// console.log(arr3, arr4);

// //forEach
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }
// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
let arr = [1, 3, 5, "a", "b", 7, 9, "n", "Ac", "bC", 12, 111, 888, 66, 77, 17]
const sortArr = [...arr].filter((a, b) => a - b);
const sortArr2 = [...arr].sort((a, b) => a - b);

console.log('sortArr', sortArr);
console.log('sortArr2', sortArr2);
// const students = ["Віка", 1, "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
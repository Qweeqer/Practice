// ----------- створення масиву

// let arr = [5, 8, 9];
// let arr1 = new Array();
// let arr2 = new Array(5,3,99)
// let arr3 = new Array(10).fill(5)
// let arr4 = [22, 99, 11].fill(10, 1)
// console.log( arr4)

// ----------- створення масиву із рядка

// let str = "Хороший сьогодні день, а вчора був не зовсім хороший";
// let arr = str.split(",");
// console.log(arr);

// ----------- перетворення масиву в рядок

// let arr = ["text", 5, "polo", "astra", 1999];
// let str = arr.join("_-_");
// console.log(str)

// ----------- конкатинація масивів

// let arr = [4,5,2];
// let arr2 = [2,1,5];
// let arr3 = arr.concat(arr2);

// let arrT = [...arr];
// arr[3] = 10;
// let arr4 = [...arr, ...arr2];
// let arr5 = arr2 + arr;
// let arr6 = [6];
// arr6.push(...arr3)
// console.log(arr6);

// sort

// let arr = [1, 5, 11, 88, 8, 34, 2, 3, 10]
// let arr1 = arr.sort((a,b) => a - b);
// // (a,b) => a - b  --- сортування по зростанню
// // (a,b) => b - a  --- сортування по спаданню
// console.log(arr1);

// let arr2 = arr.map(x => x*2)
// console.log(arr2)

// let arr2 = ['a', 'b', 'c', 'd', 'e', 'r'];
// let sub = arr2.slice(1, arr2.length);
// let sub1 = arr2.slice(1, 4);
// console.log(arr2, sub, sub1)


// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"},
//   {id: 4, name: "Женя"},
//   {id: 5, name: "Олег"},
//   {id: 6, name: "Петя"}
// ];

// let user = users.find(item => item.name == "Петя");
// let someUsers = users.filter(item => item.id >= 3);

// function printCards(obj,start, end){
//   let someUsers = obj.filter(item => item.id >= start && item.id <= end);

// }

// console.log(user);
// console.log(someUsers);


// let arr = [4, 5, 3, 8, [10, 11, [5, [4, 3], 2]], 3, 523];
// console.log(arr.flat().map(x => x))
// console.log(arr.flatMap(x => x))

// let arr = [1,2,3,4,5];
// let summ = arr.reduce((sum, current) => sum + current, 10)
// let sum = 0;
// let current = 0;
// for(let i=0; i< arr.length; i++){
//   current = arr[i];
//   sum += current;
// }
// console.log(summ)
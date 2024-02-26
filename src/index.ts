export {};

// EXAMPLE 1 - Iterate over an Array with Index in TypeScript

const arr: string[] = ['bobby', 'hadz', 'com'];

arr.forEach((element, index) => {
  // 👇️ bobby 0, hadz 1, com 2
  console.log(element, index);
});

// ---------------------------------------------------

// // EXAMPLE 2 - Iterate over an Array with Index using `map()`

// const arr: string[] = ['bobby', 'hadz', 'com'];

// const result = arr.map((element, index) => {
//   return element + index;
// });

// // 👇️ ['bobby0', 'hadz1', 'com2']
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 3 - Iterate over an Array with Index using a `for` loop

// const arr: string[] = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   // 👇️ bobby 0, hadz 1
//   console.log(arr[index], index);

//   if (index === 1) {
//     break;
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Iterate over a String with Index in TypeScript

// const str = 'hello';

// const arr: string[] = [...str];

// console.log(arr); // 👉️ ['h', 'e', 'l', 'l', 'o']

// arr.forEach((char, index) => {
//   // 👇️ h 0, e 1, l 2, l 3, o 4
//   console.log(char, index);
// });

// ---------------------------------------------------

// // EXAMPLE 5 - Iterate over a String with Index using a `for` loop

// const str = 'hello';

// for (let index = 0; index < str.length; index++) {
//   // 👇️ h 0, e 1, l 2
//   console.log(str[index], index);

//   if (index === 2) {
//     break;
//   }
// }

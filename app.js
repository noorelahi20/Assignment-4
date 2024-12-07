// Q1
// const arrays = [
// 42,
// true,
// "Hello, World!",

// {
//     name: "Noor",
//     age: 24,
//     isStudent: false,
// },

// false,
// 3.5,
// "Javascript is fun!",

// ];

// const stringArrays = arrays.map(element => String(element));

// console.log(stringArrays);


// Q2

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   const numberElements = arrays.filter(element => typeof element === 'number');
  
//   console.log(numberElements);


//   Q3

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   arrays.forEach(element => {
//     console.log(typeof element);
//   });


// Q4

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   const sumOfNumbers = arrays.reduce((accumulator, currentValue) => {
//     if (typeof currentValue === 'number') {
//       return accumulator + currentValue;
//     }
//     return accumulator;
//   }, 0);
  
//   console.log(sumOfNumbers);

// Q5

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   const firstBoolean = arrays.find(element => typeof element === 'boolean');
  
//   console.log(firstBoolean);

// Q6

// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   const indexOfFirstObject = arrays.findIndex(element => typeof element === 'object' && element !== null);
  
//   console.log(indexOfFirstObject);


// Q7


// const arrays = [
//     42,
//     true,
//     "Hello, World!",
//     {
//       name: "Noor",
//       age: 24,
//       isStudent: false,
//     },
//     false,
//     3.5,
//     "Javascript is fun!",
//   ];
  
//   const containsNumber = arrays.some(element => typeof element === 'number');
  
//   console.log(containsNumber);


// Q8

const arrays = [
    42,
    true,
    "Hello, World!",
    {
      name: "Noor",
      age: 24,
      isStudent: false,
    },
    false,
    3.5,
    "Javascript is fun!",
  ];
  
  const allStrings = arrays.every(element => typeof element === 'string');
  
  console.log(allStrings);




// const myArr = [12, 42, 54, 23, 34];
// const myArr2 = ['Nazmul', 'Hasan', 'Jamal', 'kamal'];
// change value 
// myArr[0] = 56;


// check length ////////
// const checkLength = myArr.length;
// console.log(checkLength);

// check index ////////
// const checkIndex = myArr.indexOf(23);
// console.log(checkIndex);

// get element from array //////////

//  const newArr = [];
 // for of loop////////////
//  for (const arr of myArr2) {
//    newArr.push(arr);
//  }
//  console.log(newArr);

// normal loop/////////////
// for(let i = 0; i<myArr.length; i++){
//   const element = myArr[i];
//   newArr.push(element);
// }
// console.log(newArr);

// function
// normal function/////////////
// function multiply(num1, num2){
//   const result = num1 * num2;
//   return result;
// }
// const output = multiply(10,10);
// console.log(output);

// arrow function ////////////
// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(10,9));


// object /////////////

const studentData = {
  name: 'Nazmul',
  age: 23,
  skill: ['javascript', 'react', 'mongo', 'express'],
  expert: 'nodeJs',
  salary: 25000
}

// 3 ways to access property by name////////////
// way 1
const studentAge = studentData.age; // direct by property
const studentskill = studentData.skill;
// way 2
const studentAge2 = studentData['age']; // access via property name string
const studentskill2 = studentData['skill'];
// way 3
const studentSalary = 'salary'; // access via property name in a variable
// console.log(studentAge2);
// console.log(studentskill2);
console.log(studentData[studentSalary]);

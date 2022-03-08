// const myArr = [12, 42, 54, 23, 34];
const studentData = {
  name: 'Nazmul',
  age: 23,
  skill: ['javascript', 'react', 'mongo', 'express'],
  expert: 'nodeJs',
  salary: 25000
}

// // template string ///////////
// const mySkill = `
//   Hello Guys, I am ${studentData.name} and i'm expert in ${studentData.skill} . I have ${studentData.salary} taka for live. My favorite Number is ${myArr[2]}
// `;
// console.log(mySkill);


// arrow function //////////
// without parameter return 55
const getFiftyFive = () => 55;      console.log(getFiftyFive());

// one parameter & sum 65 with this 
const getSum = sum => sum + 65;     console.log(getSum(35));

//check even or odd / Even return true , odd return false
const getEven = num => num % 2 == 0;    console.log(getEven(21));

//multi Parameter 
const addTotal = (x,y,z) => x + y + z;    console.log(addTotal(100,200,300));

//multi line arrow function
const multiArrow = (x, y) => {
  const getSum = x + y;
  return getSum;
}
console.log(multiArrow(500,500));


// spread operator ///////////////
const myArr = [12, 42, 54, 23, 34,49,200,54];

const myNewArr = [100,200,...myArr, 300, 400, 500];
console.log(myNewArr);
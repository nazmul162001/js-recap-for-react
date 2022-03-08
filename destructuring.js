
// Array destructuring 
const numbers = [52, 65, 85, 74]
// get new variable from array 
// old system 
// const x = numbers[0];
// const y = numbers[1];

// destructuring method 
const [x, y] = numbers
// console.log(x, y);


// using object an array 
const studentData = {
  name: 'Nazmul',
  age: 23,
  skill: ['javascript', 'react', 'mongo', 'express'],
  expert: 'nodeJs',
  salary: 25000,
  employe: {
    name:'anis', 
    age:25, 
    salary:20000,
    skill: 'developement'
  }
}

// const {name, skill} = studentData;
// console.log(name, skill);
 
const {name,salary, skill} = studentData?.employe;
console.log(name, salary, skill);


//Arrt Destructuring মুলত কোন array বা object এর উপর করা হয়ে থাকে। কোন একটা অ্যারে বা অবজেক্ট থেকে কোন কিছুর মান বা ভ্যালু নিয়ে অন্য আলাদা ভ্যারিয়েবল তৈরি করার জন্য array destructuring ব্যাবহার করা হয়।
// arraay এর উপর distructuring করলে variable array এর মধ্যে নিতে হবে এবং distructuring object এর উপর করলে variable object এর মধ্যে নিতে হবে।
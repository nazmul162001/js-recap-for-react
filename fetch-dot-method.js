// JSON stringify

const studentData = {
  name: 'Nazmul',
  age: 23,
  skill: ['javascript', 'react', 'mongo', 'express'],
  expert: 'nodeJs',
  salary: 25000
}
// convert object to JSON stringify /////////////////
const JSONStudent = JSON.stringify(studentData);
// console.log(studentData, JSONStudent);

// convert JSON stringify to object /////////////////
const object = JSON.parse(JSONStudent);
// console.log(object);


// keys, values ///////////////////
// কোন একটা অবজেক্ট থেকে আমরা যদি তার সকল keys গুলো পেতে চাই তাহলে আমরা Object.keys(objectName); আর যদি values গুলো পেতে চাই তাহলে Object.values(objectName);

// get keys 
const keys = Object.keys(studentData);
// console.log(keys);

// getValues 
const getValue = Object.values(studentData);
// console.log(getValue);

// get both / keys values pair

const getPair = Object.entries(studentData); // it return array or array
// console.log(getPair);

// advance way ////// Highly recommend
for (const [key, value] of Object.entries(studentData)) {  // it return direct result/////
  // console.log(`${key} : ${value}`);  
}



// three dont method / spread ///////////////////
const products = [
  {name:'laptop', price:32000, brand:'lenovo',color:'silver'},
  {name:'watch', price:3200, brand:'lige',color:'black'},
  {name:'phone', price:42000, brand:'onePlus',color:'silver'},
  {name:'laptop', price:72000, brand:'macbook',color:'black'},
  {name:'headphone', price:3270, brand:'xiaomi',color:'red'},
];

// for add new product  ////////////////
const newProduct = {name: 'airPod', price: 3000, brand: 'apple', color: 'black'};

// এখন নতুন একটা array like object Creat করতে হবে  যেইটা তে আগের product এর ভ্যালু গুলো থাকবে এবং newProduct এর ভ্যালু গুলোও এড হবে।

const allProducts = [...products, newProduct];
// products টা একটা array মধ্যে রয়েছে এইজন্য এইটার আগে ... ব্যাবহার করা হয়েছে। আর newProduct টা একটা object এর মধ্যে রয়েছে এইজন্য  এইটা সরাসরি বসিয়ে দেয়া হয়েছে।

// console.log(allProducts);

// remove product  ////////////////////
const remaining = products.filter(p => p.name !== 'phone');

const allProducts2 = [...remaining, newProduct];
console.log(allProducts2);
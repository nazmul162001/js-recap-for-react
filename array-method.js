// array of object 
// map ////////////

const products = [
    {name:'laptop', price:32000, brand:'lenovo',color:'silver'},
    {name:'watch', price:3200, brand:'lige',color:'black'},
    {name:'phone', price:42000, brand:'onePlus',color:'silver'},
    {name:'laptop', price:72000, brand:'macbook',color:'black'},
    {name:'headphone', price:3270, brand:'xiaomi',color:'red'},
];

// make new array from this array Using map 
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price)
console.log(brands);
console.log(prices);
// যখন আমাদের কোন কিছুর মান বা ভ্যালু রিটার্ন দরকার হয় তখন আমরা map ব্যাবহার করব। এখানে const brands, const price এই দুইটা ভ্যারিয়েবল নেয়ার কারন হল map ব্যাবহার করে লুপ করার পর যে ভ্যালু গুলো পেয়েছি সেগুলোকে রাখার জন্য নেয়া হয়েছে। আর যখন আমাদের কোন কিছুর রিটার্ন দরকার হবে না তখন আমরা forEach loop ব্যাবহার করব।

// forEach //////////////// 
products.forEach(product => console.log(product.color));
// multi line 
products.forEach(product => {
  // code or condition
});
// এখানে কোন ভ্যারিয়েবল নেয়া হয়নি, তার কারণ হলো আমরা এখন কোন কিছু রিটার্ন হিসাবে চাচ্ছি না।


// filter  ///////////////
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

// filter মুলত একটা array রিটার্ন করে এবং এইটা condition চেক করার জন্য ব্যাবহার করা হয়। যেমন উপরের উদাহরনে আমি array এর মধ্যে থেকে ৫০০০ এর নিচে যতগুলো প্রডাক্ট আছে শুধুমাত্র সেই প্রডাক্ট গুলো দেখতে চেয়েছি এজন্য filter ব্যাবহার করেছি।

// find  ////////////
const higher = products.find(product => product.price >= 5000);
console.log(higher);

// find ও condition চেক করার জন্য ব্যাবহার করা হয়। তবে find শুধুমাত্র প্রথম যেইটা কে পাবে শুধুমাত্র সেইটা আউটপুট দিবে আর বাকিগুলো দেখাবে না।


// includes  ////////////
const specificName = products.filter(x => x.name.includes('n'));
console.log(specificName);

// কোন একটা অ্যারে এর মধ্যে থেকে যখন আমরা কোন নির্দিষ্ট word matching করে কনডিশন দিতে চাই তখন আমরা .includes ব্যাবহার করি।



const arr = [20, 52, 78, 65, 45];
// এখন এইটা কে map use করে প্রত্যেকটা সংখ্যাকে ২ দিয়ে গুন করে গুনফল অন্য একটা array তে দেখাতে হবে।

const newArr = arr.map(x => x * 2);
console.log(newArr);
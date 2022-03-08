// 'almas', 5. true. {}, []
// '', 0, false, null, undefined

// check any truthy
let myVar = 5;
if(myVar){
  myVar = myVar * 100;
}
else {
  myVar = 0;
}

let myMoney = 50;

// check negative or falsy anything
if(!myMoney){

}

// shortcut method / ternary operator    /////////////
// normal system 
const money = 800;
let food;
if(money > 100){
  food = 'biriyani';
}
else{
  food = 'cha biscuit'
}
// console.log(food);

// using same thing using ternary operator //////////
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food1);

// shortCut 
// convert number to string /////////
let number = 52;
// console.log(x);
let toStrNum = number + '';
// console.log(toStrNum);

//convert string to number /////////////

let strNum = '50';
// console.log(strNum);
let toNumber = +strNum;
// console.log(toNumber);


// ternary operator shortCut  ////////////// 
const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

// ternary 
isActive ? showUser() : hideUser();


// more shortCut 
// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean ////////// if true then make it false & if false then make it true
isActive = !isActive;
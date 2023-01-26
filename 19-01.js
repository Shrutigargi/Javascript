// in javascript we can declare a variable in 3 ways
// 1. by using var
// 2. by using let
// 3. by using const   

// var myName = "John";
// console.log(myName);
// myName = 5;
// console.log(myName);

// let myName = "John";
// console.log(myName);
// myName = 5;
// console.log(myName);
// let myName = "Taylor"
 

// String Interpolation

// let firstname = "shruti";
// let lastname = "srivastava";

// // let fullname = firstname + " " + lastname;
// let fullname = `${firstname} ${lastname}`;
// console.log(fullname);
// console.log(firstname);

// Default Params

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// let addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(1, 2));

// // Rest and spread operator are applicable in arrays and objects in js
// // let array = [5, 10, 15, 20, 25];
// // // spread -> ...
// // let newarray = [...array]
// // console.log(array);

// // rest -> ...
// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for (let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// } 
// console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// for object
// let object = {
//     name: "John",
//     age: 24,
//     city: "New york",
// };
// let object2 = {...object, country: "USA", favoriteSong: "Numb By numbs link and park"}
// console.log(object);


// const firstName="John";
// const age="18";
// const hobby="guitar";
// firstName + " is " + age + "years old" +".John hobby is " + hobby;
// const aboutPerson=`${firstName} is ${age} years old.John hobby is ${hobby}`;
// console.log(aboutPerson);



// 1.  .map()

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);

// let array = [5, 10, 15, 20];
// function functionForMap(element){
//     return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);


// In JS, a function is also a JS object



// 2. .forEach()

// let array = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// )};


// 3.  .filter()

// let array = [10, 20, 30, 40, 50];
// vector<int> v;
// for (int i = 0; i < sizeof(array)/sizeof(array[0]; i++) {
//     if (array[i] >= 30) {
//         v.push_back(array[i]);
//     }
// }

// List<Integer> list = new ArrayList<>();
// for (int i = 0; i< Array.length; i++) {
//     list.add(array[i]);
// }

// 4.  .find
// let array = [10, 20, 30, 40, 50];
// array.find((value) => {
//     return value >20;
// )};

// 5. .sort
// let array = [50, 40, 30, 20, 10];
// let sortedArray = array.sort();
// console.log(sortedArray);


// object destructuring
// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyon",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// },
// let myName = details.name;
// let age = details.age;
// let {name: myName, age} = details;
// console.log(myName, age);


// if (array1 == array2)
//  let obj1 = {name: "shruti"};
//  let obj2 = {name: "shruti"};
//   function areEqual(obj1, obj2) {
//     if (obj1 ==obj2) {
//         return true;
//     }
//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//         return false;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (type obj2[key] == "underfind") {
//             return false;
//         }
//         if (obj2[key] !== obj2[key]) {
//             return false;
//         }
//     }
//   }


// Map and Set

// let map = new Map();
// map.set(1, "shruti");
// map.set(2, "Alex");
// console.log(map);

// let set = new Set();
// set.add(1);
// set.add(-1);
// console.log(set);


// class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs, color, family, sounf) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}
let animal = new Animal(4, "brown", "rodent", "something");
console.log(animal);


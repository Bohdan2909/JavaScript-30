//1 

let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  } else {

    return "Change Me";
  }

  // Змініть код лише над цим рядком
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

//2
// Налаштування
const testOb = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Змініть код лише під цим рядком
const entreeValue = testOb["an entree"]; // Змініть цей рядок
const drinkValue = testOb["the drink"]; // Змініть цей рядок

//3
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Змініть код лише під цим рядком
const playerNumber = 16; // Змініть цей рядок
const player = String(testObj[playerNumber]); // Змініть цей рядо
console.log(player);

//4
// Налаштування
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = 'Happy Coder';
// Змініть код лише під цим рядком
console.log(myDog);

//5
const myDogs = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = 'hav';

//6
const myDogss = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Змініть код лише під цим рядком
delete myDog.tails;

//7
// Налаштування
function phoneticLookup(val) {
  let result = "";

  // Змініть код лише під цим рядком

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
   result = lookup[val];

  // Змініть код лише над цим рядком
  return result;
}
console.log(phoneticLookup("charlie"));

//8
function checkObj(obj, checkProp) {
  // Змініть код лише під цим рядком
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } 
  return "Not found";
  // Змініть код лише над цим рядком
}
//9
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

//10
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
 
}
console.log(myArray);

//11
// Налаштування
const myArr = [];
for (let i = 1; i < 5; i++) {
  myArr.push(i);
}

console.log(myArr);

//12
// Налаштування
const myAr = [];
for (let i = 9; i > 0; i -= 2) {
  myAr.push(i);
}
// Змініть код лише під цим рядком

//13
const myA = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myA.length; i++) {
  total += myA[i];
}
console.log(total);

//14
function multiplyAll(arr) {
  let product = 1;
  // Змініть код лише під цим рядком
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Змініть код лише над цим рядком
  return product;
}
//15 
function sum(arr, n) {
  // Змініть код лише під цим рядком
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Змініть код лише над цим рядком
}
console.log(sum([2,4,5,6], 4));

//16
// Налаштування
const contacts = [{
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Akira", "likes"));

//17
function randomFraction() {

  // Змініть код лише під цим рядком
  let random = Math.floor(Math.random() * 10);
  return random;

  // Змініть код лише над цим рядком
}
console.log(randomFraction());

//18
function randomRange(myMin, myMax) {
  // Змініть код лише під цим рядком
  let random = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return random;
  // Змініть код лише над цим рядком
}
console.log(randomRange(10, 15));

//19
function convertToInteger(str) {
  let num = parseInt(str);
  return num;
}
console.log(convertToInteger('23.565gjfh'));

//20
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.push(n);
    return arr;
  }
}
console.log(countdown(5));

//21
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  }
  const arr = rangeOfNumbers(startNum, endNum - 1);
   arr.push(endNum);
   return arr;
}
console.log(rangeOfNumbers(1, 6));

//22
const s = [5, 7, 2];

function editInPlace() {
  // Змініть код лише під цим рядком

  // Використання s = [2, 5, 7] може бути недійсним
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Змініть код лише над цим рядком
}
editInPlace();

//23
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Змініть код лише під цим рядком
  Object.freeze(MATH_CONSTANTS);

  // Змініть код лише над цим рядком
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//7 kyu Highest and Lowest
//#1
function highAndLow(numbers) {
const arr = numbers.split(' ');
return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
console.log(highAndLow("1 -8 4 6")); // 6 -8;

//#2
function highAndLow(numbers) {
  const arr = numbers.split(' ').sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + ' ' + arr[0];
}

//#3
function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

//7 kyu Disemvowel Trolls
//#1
function disemvowel(str) {
  let newStr = "";
for(let i = 0; i < str.length; i++){
 if ("aeiou".includes(str[i].toLowerCase())) continue;
newStr += str[i];
}
return newStr;
}
console.log(disemvowel('This day super'));

//#2
function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join('');
}

//#3
function disemvowel(str) {
  let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''));
  return newStr;
}
const max = (a, b) => (a == b ? a : b);

const str = (0.32 * 0.22 * 0.75);

console.log((str));


 for (let i = 0; i <= 4; i++) {
   console.log(i++);
 } 
 console.log('\nHey!' [1]);

  // let i = 0;
  // let c = 0;
  // const str = 'Rolling Scopes School';
  // while (i < str.length) {
  //   if (str[i] === 'o') {
  //     c++;
  //   }
  //   i++;
  // }
  console.log(c);//4
  console.log(i);

   const a = '';
   const b = 9;
   const c = null;
   const d = !!(a || !b || c)

   console.log(Math.min(10, 222, -5, 0, '-33'));

 let w = 5;
 console.log(++w);//6
 console.log(w++);//5 ale razom 6/6
;


var last = 'John';

function printName(){
  console.log(last);
  var last = 'Pter';
  console.log(last);
}
printName();

// function con(a,b){
//   return a*b;
// }
// const bar = con.bind(null, 2);
// console.log(bar(2));//4

const deo = bar();
const num = 2;
function bar(){return num};
console.log(bar());

console.log(message);
var message = 'Hwll';

const det = {
  name: "John",
};

function getMes(message){
  return `${message} ${this.name}`;


}
console.log(getMes.apply(det, ['Hello']));

//7kyu Isograms

function isIsogram(str) {
 
  let string = str.toLowerCase();
  for(let i = 0; i < string.length; i++){
    for(let j = i + 1; j< string.length; j++){
      if(string[i] === string[j]){
        return false;
      }
    }
  }
  return true;
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}

console.log(isIsogram('Bohdddan'));

// 7kyu Digits Explosion

function explode(str) {
  return str.split('').map(digit => {
    let newStr = '';
    for (let i = 0; i < digit; i++) {
      newStr += digit;
    }
    return newStr;
  }).join('');
}
function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}
function explode(s) {
  s = s.split("");
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "1":
        newS = newS + "1";
        break;
      case "2":
        newS = newS + "22";
        break;
      case "3":
        newS = newS + "333";
        break;
      case "4":
        newS = newS + "4444";
        break;
      case "5":
        newS = newS + "55555";
        break;
      case "6":
        newS = newS + "666666";
        break;
      case "7":
        newS = newS + "7777777";
        break;
      case "8":
        newS = newS + "88888888";
        break;
      case "9":
        newS = newS + "999999999";
        break;
      case "0":
        newS = newS + "";
        break;
    }
  }
  return newS;
}
console.log(explode("413"));

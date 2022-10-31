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
    for (let i = 0; i < str.length; i++) {
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
console.log(c); //4
console.log(i);

const a = '';
const b = 9;
const c = null;
const d = !!(a || !b || c)

console.log(Math.min(10, 222, -5, 0, '-33'));

let w = 5;
console.log(++w); //6
console.log(w++); //5 ale razom 6/6
;


var last = 'John';

function printName() {
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

function bar() {
    return num
};
console.log(bar());

console.log(message);
var message = 'Hwll';

const det = {
    name: "John",
};

function getMes(message) {
    return `${message} ${this.name}`;


}

console.log(getMes.apply(det, ['Hello']));

//7kyu Isograms

function isIsogram(str) {

    let string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
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

const explosion = s => s.replace(/\d/g, d => d.repeat(d));
console.log(explode("413"));
//8kyu Hello world

const greet = () => "hello world";

//6kyu Handshake problem
function getParticipants(h) {
    for (let i = 0, k = 1; i <= h; i += k++) {

        console.log(k);
    }

}

console.log(getParticipants(7));

//6kyu Duplicate Encoder
function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map(function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

function duplicateEncode(word) {
    const letterArray = word.toLowerCase().split("");
    let outPutString = [];
    for (i in letterArray) {
        outPutString.push(
            word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")"
        );
    }
    return outPutString.join("");
}

//6 kyu N - th Fibonacci
function nthFibo(n) {
    let arr = [0, 1];
    for (let i = 1; i < n; i++) {
        arr.push(arr[i - 1] + arr[i]);
        console.log(arr);
    }
    return n > 0 ? arr[n - 1] : 0;
}

console.log(nthFibo(4)); //2

//4 kyu Human readable duration format

function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now';
    }
    let typeArr = ['year', 'day', 'hour', 'minute', 'second'];
    let sec = 0;
    let minute = 0;
    let hour = 0;
    let day = 0;
    let year = 0;
    minute = Math.floor(seconds / 60);
    sec = seconds % 60;

    hour = Math.floor(minute / 60);
    minute = minute % 60;

    day = Math.floor(hour / 24);
    hour = hour % 24;

    year = Math.floor(day / 365);
    day = day % 365;

    let resultArr = [year, day, hour, minute, sec];
    let resultStrArr = [];
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] === 1) {
            resultStrArr.push(resultArr[i] + ' ' + typeArr[i]);
        } else if (resultArr[i] >= 2) {
            resultStrArr.push(resultArr[i] + ' ' + typeArr[i] + 's');
        }
    }
    let resultStr = '';
    for (let i = 0; i < resultStrArr.length; i++) {
        if (i === resultStrArr.length - 2) {
            resultStr += resultStrArr[i] + ' and ' + resultStrArr[i + 1];
            break;
        }
        if (i !== resultStrArr.length - 1) {
            resultStr += resultStrArr[i] + ', ';
        } else {
            resultStr += resultStrArr[i];
        }
    }
    return resultStr;
}

console.log(formatDuration(3645));

//7 kyu Head, Tail, Init and Last

const headEl = array => array[0];

const tailEl = array => array.slice(1);

const initEl = array => array.slice(0, -1);

const lastEl = array => array[array.length - 1];

//6kyu Array Deep Count
function deepCount(a) {
    return a.reduce((acc, el) => Array.isArray(el) ? acc += deepCount(el) : acc, a.length);
}

console.log(deepCount([1, 2, 3]));

//6kyu Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
    const lengths = (arrayOfArrays || [])
        .map(a => a ? a.length : 0)
        .sort((a, b) => a - b);

    if (lengths.includes(0)) {
        return 0;
    }

    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        }
    }

    return 0;
}

//Random task
function nameLast(str) {
    const arrStr = str.split(' ');
    const one = arrStr[0].slice(0, 1);
    const two = arrStr[1].slice(0, 1);
    return `${one}.${two}`;
}

console.log(nameLast('Bohdan Atamaniuk'));

//

function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += Math.floor(p0 * (percent / 100)) + aug;
    }
    return years;
}

//6kyu pair of gloves

function numberOfPairs(gloves) {
    const glove = gloves.slice().sort();
    const pairs = [];

    for (let i = 0; i < glove.length - 1; i++) {
        if (glove[i] == glove[i + 1]) {
            pairs.push(glove[i]);
            i++;
        }
    }
    return pairs.length;
}

//6kyu Sorting by bit
function sortByBit(arr) {
    const countBit = (bit) => bit.toString(2).replace(/[0]/g, '').length;
    return arr.sort((a, b) => countBit(a) === countBit(b) ? a - b : countBit(a) - countBit(b));
}

//6kyu Let's Recycle!
function recycle(array) {
    const materials = ['paper', 'glass', 'organic', 'plastic'];
    return materials.map(item => array.filter(el => (el.material === item || el.secondMaterial === item)).map(el => el.type));
}

//8 kyu Sum og Positive

function positiveSum(arr) {
    // const init = 0
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i])
        }
    }
    return newArr.reduce((acc, cur) => acc + cur, init = 0);

}

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

console.log(positiveSum([-1, -3, -5, -6, -4]));


// 7kyu Highest and Lowest
function highAndLoww(numbers) {
    let strMax = Math.max(numbers.split(' '))
    let strMin = Math.min(numbers.split(' '))

    return `${strMax} ${strMin}`
}

console.log(highAndLoww('1 2 3 4 5'))




//7 kyu Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    let [a, b] = numbers.sort((a, b) => a - b)
    return a + b
}

function sumTwoSmallestNumbers(numbers) {
    let res = numbers.sort((a, b) => a - b).slice(0, 2)
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i]
    }
    return sum
}

console.log(sumTwoSmallestNumbers([1, 2, 3, 5, 10]))

//8 kyu A Needle in the Haystack

function findNeedle(haystack) {
    // your code here
    const haystack = ['one', 'two', 'needle']
    const indexEL = haystack.findIndex(el => el === 'needle')
    console.log(indexEL);

    return `found the needle at position ${indexEL}`
}

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

function findNeedle(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'needle')
            return 'found the needle at position ' + i;
    }

}
console.log(findNeedle);

// 7kyu List Filtering

function filter_list(arr) {
    let newArr = arr.filter(el => typeof (el) !== 'string')
    return newArr
}

function filter_list(l) {
    return l.filter(Number.isInteger);
}

function filter_list(l) {
    let res = [];
    for (let  item = 0; item < l.length; item++) {
        if (typeof l[item] === "number") {
            res.push(l[item]);
        }

    }
    return res;
}
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

//7kyu Exes and Ohs 
function XO(str) {
    
let x = ''
let o = ''

for (let i = 0; i< str.length; i++){
    if(str[i].toLowerCase() === 'x'){
        x += str[i]
    }else if (str[i].toLowerCase() === 'o'){
        o += str[i]
    }
}
   
 return x.length === o.length
}
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(el => el === 'x').length === str.filter(el => el === 'o').length;
  }
console.log(XO('ooxXm'));

//7kyu Sum of the first nth term of Series
function SeriesSum(n) {
    if(0 == n) return "0.00"
    let s = 1;
    for(let i=1; i<n; i++) s += 1/(1+3*i);
    return s.toFixed(2);
  }
  console.log(SeriesSum(4));

  //7kyu Get the Middle Character
  function getMiddle(str){
    let odd = ''
    let even = ''
    let one = ''
    
        if(str.length % 2 == 0) {
            let indNext = Math.floor(str.length / 2)
            let indPrev= indNext - 1
            odd = str[indPrev] + str[indNext]
        }
        if(str.length % 2 !== 0){
            let ind = Math.floor(str.length / 2)
            even = str[ind]
        }
        if (str.length === 1){
            one = str[0]
        }

    
   return odd || even || one
}
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
console.log(getMiddle('test'));
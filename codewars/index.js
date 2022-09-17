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
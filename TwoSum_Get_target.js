// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const sumToGetTarget = (arr, target) => {
  var arrlen = arr.length;

  for (var i = 0; i < arrlen; i++) {
    for (var j = i + 1; j < arrlen; j++) {
      if (arr[i] + arr[j] == target) {
        return [arr[i], arr[j]];
      }
    }
    return [];
  }
};

let result = sumToGetTarget([1, 3, 4, 5, 6], 7);
console.log("The digit get :", result);

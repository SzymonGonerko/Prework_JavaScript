const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

/**
 * Write your code below!
 */

function maxFromArray(numbers) {
    numbers.sort((a, b) => a - b);
    let maxNumber = numbers[numbers.length - 1];
    return maxNumber;
};

let result = maxFromArray(randomNumbers);
console.log(result);

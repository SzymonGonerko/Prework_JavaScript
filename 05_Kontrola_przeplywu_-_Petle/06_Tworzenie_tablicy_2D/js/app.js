const numbers = [];
const columns = 4;
const rows = 5;

/**
 * Write your code below!
 */

let t = 0;
for (let i = 0; i < rows; i++) {
    numbers[i] = []
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

        numbers[i][j] = t++;
    }
}

console.log(numbers);
const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for (let i = 0; i < n; i++) {
    calc[i] = []
};

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
        let multi = (i+1) * (j+1);
        calc[i][j] = (i+1) + " * " + (1+j) + " = " + multi;
    }
}

console.log(calc[0][0] + " | " + calc[0][1] + " | " + calc[0][2]);
console.log(calc[1][0] + " | " + calc[1][1] + " | " + calc[1][2]);
console.log(calc[2][0] + " | " + calc[2][1] + " | " + calc[2][2]);

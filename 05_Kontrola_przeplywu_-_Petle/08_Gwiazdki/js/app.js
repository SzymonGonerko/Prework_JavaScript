const n = 5;

/**
 * Write your code below!
 */

let star = "*";
const tree = [];

for (let i = 0; i < n; i++) {
    tree[i] = [];
    for (let j = i ; j < n; j++) {
        tree[i].push(star);
    }
};
tree.reverse();

console.log(tree[0][0]);
console.log(tree[1][0], tree[1][1]);
console.log(tree[2][0], tree[2][1], tree[2][2]);
console.log(tree[3][0], tree[3][1], tree[3][2], tree[3][3]);
console.log(tree[4][0], tree[4][1], tree[4][2], tree[4][3],tree[4][4]);

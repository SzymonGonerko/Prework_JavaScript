function createArray(rows) {
    const newArray = [];
    for (let i = 0 ; i < rows; i++) {
        newArray[i] = i + 1;
    };
    return newArray;
};

createArray(5);
console.log(createArray(5));



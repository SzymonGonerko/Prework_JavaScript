const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

/**
 * Write your code below!
 */

function indexOfRepeatedValue(array) {
    let firstIndex = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                if(firstIndex == "") {
                    firstIndex = array.indexOf(array[i]);
                    break;
                }
            }
        }

        if(firstIndex !== ""){

            break;
        }
    }
    return firstIndex;
    console.log("Indeks pierwszej powtorzonej liczby z tablicy to: " + firstIndex);
};

indexOfRepeatedValue(numbers);
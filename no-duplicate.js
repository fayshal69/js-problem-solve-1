function noDuplicate(array) {
    const newArray = [];
    for(let item of array) {
        if(!newArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}


const biriyaniKhor = ['abul', 'kabul', 'babul', 'habul', 'babul', 'nabul', 'abul', 'kabul'];
const numbers = [1, 3, 5, 7, 3, 5, 9, 2, 3];

const result1 = noDuplicate(biriyaniKhor);
const result2 = noDuplicate(numbers);

console.log(result1);
console.log(result2);
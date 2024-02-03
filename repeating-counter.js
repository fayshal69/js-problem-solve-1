function repeatingCounter(array, find) {
    let count = 0;
    let newArray = [];
    for(let i of array) {
        if(!newArray.includes(i)) {
            newArray.push(i);
        }
        else if(i === find){
            count++;
        }
    }
    if(array.includes(find) && count === 0) {
        return 1;
    }
    else if (count > 0) {
        return count + 1;
    }
    else {
        return 0;
    }
}

const numbers = [5,6,11,12,98, 5, 10, 11, 12, 4, 10, 10];
const findNumber = 0;

const result = repeatingCounter(numbers, findNumber);
console.log(result);
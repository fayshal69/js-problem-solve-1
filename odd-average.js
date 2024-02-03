function oddAverage(numbers) {
    let sum = 0, i = 0;
    for(let x of numbers) {
        if(x % 2 === 1) {
            sum += x;
            i++;
        }
    }
    const avg = (sum / i);
    return avg;
}

const numbers = [12, 35, 44, 53, 97, 1, 23];
const result = oddAverage(numbers);
console.log(result);
function randomNumber(max , min) {
    const num = Math.round((Math.random() * (max - min)) + min);
    return num;
}

const max = 20, min = 10;
const result  = randomNumber(max, min);
console.log(result);
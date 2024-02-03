function findWord(str) {
    const words = str.split(' ');
    let longWord = words[0];
    for(let i of words) {
        if(i.length > longWord.length) {
            longWord = i;
        }
    }
    return longWord;
}

const str = 'I am learning Programming to become a programmer';
const result = findWord(str);
console.log(result);
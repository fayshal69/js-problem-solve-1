function countVowel(sentnc) {
    let count = 0, i;
    let length = sentnc.length;
    for(i = 0; i < length; i++) {
        if(sentnc[i] === 'a' || sentnc[i] === 'e' || sentnc[i] === 'i' || sentnc[i] === 'o' || sentnc[i] === 'u' || sentnc[i] === 'A' || sentnc[i] === 'E' || sentnc[i] === 'I' || sentnc[i] === 'O' || sentnc[i] === 'U') {
            count++;
        }
    }
    return count;
}

const str= 'aeiouAEIOU';

const result = countVowel(str);
console.log(result);
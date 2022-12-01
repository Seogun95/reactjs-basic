let word = '';

function isOdd(num) {
    if (num % 2) {
        return '홀';
    } else {
        return '짝';
    }
}

for (let i = 1; i < 9; i++) {
    word = word + isOdd(i);
}

console.log(word);

function countOccurrences(numbers: number[], value: number) {
    let count = 0;

    for (let i = 0; i < numbers.length ; i++) {
        if (numbers[i] === value){
            count ++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 3, 1, 1, 4, 1], 1))
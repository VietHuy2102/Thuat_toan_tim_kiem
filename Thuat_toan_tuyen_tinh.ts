function findtemMiss(data: number[]){
    let i = 1;
    let arr = [];
    while (i<=10){
        if (data.indexOf(i)==-1){
            arr.push(i)
        }
        i++;
    }
    return arr
}
findtemMiss([1,4,5,9]);
console.log(findtemMiss([1,4,5,9]))


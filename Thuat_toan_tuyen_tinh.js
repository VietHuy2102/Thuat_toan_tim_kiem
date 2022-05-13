function findtemMiss(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
findtemMiss([1, 4, 5, 9]);
console.log(findtemMiss([1, 4, 5, 9]));

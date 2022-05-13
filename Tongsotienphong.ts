let sum = 0;

function matrixElementsSum(arr:any) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr1[i][j] === 0) {
                arr2[i][j] === 0 && arr3[i][j] === 0;
                sum += arr1[i][j];
            } else if (arr1[i][j] !== 0) {
                sum += arr1[i][j];
            }
        }
    }
    return sum
}
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
matrixElementsSum(matrix)
console.log(sum)
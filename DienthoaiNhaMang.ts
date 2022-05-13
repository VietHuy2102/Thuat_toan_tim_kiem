// let a = 123456789;
//
// console.log(a.toString())
let vietTel = [];
let mobile = [];
let vinaPhone = [];

function noName(numbers: string[]) {

    let a = `034`;
    let b = `070`;
    let c = `083`;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].toString().substring(0, 3) === a) {
            vietTel.push(numbers[i]);
        } else if (numbers[i].toString().substring(0, 3) === b) {
            mobile.push(numbers[i]);
        } else if (numbers[i].toString().substring(0, 3) === c) {
            vinaPhone.push(numbers[i])
        }

    }

}

let arr = [`0341212121`, `0701212121`, `0831212121`, `034121212112454`]
noName(arr)
console.log(`Các số đầu viettel là: ` + vietTel);
console.log(`Các số đầu vinaPhone là: ` + vinaPhone);
console.log(`Các số đầu vinaPhone là: ` + mobile);

// let a = 123456789;
//
// console.log(a.toString())
var vietTel = [];
var mobile = [];
var vinaPhone = [];
function noName(numbers) {
    var a = "034";
    var b = "070";
    var c = "083";
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i].toString().substring(0, 3) === a) {
            vietTel.push(numbers[i]);
        }
        else if (numbers[i].toString().substring(0, 3) === b) {
            mobile.push(numbers[i]);
        }
        else if (numbers[i].toString().substring(0, 3) === c) {
            vinaPhone.push(numbers[i]);
        }
    }
}
var arr = ["0341212121", "0701212121", "0831212121", "034121212112454"];
noName(arr);
console.log("C\u00E1c s\u1ED1 \u0111\u1EA7u viettel l\u00E0: " + vietTel);
console.log("C\u00E1c s\u1ED1 \u0111\u1EA7u vinaPhone l\u00E0: " + vinaPhone);
console.log("C\u00E1c s\u1ED1 \u0111\u1EA7u vinaPhone l\u00E0: " + mobile);

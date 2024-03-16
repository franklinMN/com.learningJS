// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code

function objExample( a, b, c ){

    return {
        a, b, c,
        showValues: () => console.log(
            "Value a is " + a + "\n" +
            "Value b is " + b + "\n" +
            "Value c is " + c
        )
    }
}

const answerOne = objExample(10,20,30);

console.table(answerOne);
console.log(answerOne.showValues());
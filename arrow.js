// function doubleIt(num){
//     return  num * 2;
// }

// 
const doubleIt = num => num * 2; //arrow function
const result = doubleIt(5);
console.log(result);

const add = (num1, num2) => num1 + num2; // more than one parameter
const total = add (10, 20);
console.log(total);

const give5 = () => 5;    // empty parameter
const result1 = give5();
console.log(result1);

const doMath = (x, y) => { // multiple line function body
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff ;
    return result;
}

const result3 = doMath(20, 10);
console.log(result3);

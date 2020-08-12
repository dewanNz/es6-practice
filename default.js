function add (num1, num2 = 20){ // default parameter
    // if(num2 === undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1+num2;
}
const sum = add (20);
console.log(sum);
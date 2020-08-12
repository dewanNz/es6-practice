// class Child{
//     constructor(name){
//         this.name= name;
//     }
// }
// const baby = new Child('Tom');
// const baby2 = new Child('Jerry');
// console.log(baby);
// console.log(baby2);


// class Parent{
//     constructor(){
//         this.fatherName = "Arnold";
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name= name;
//     }
// }
// const baby = new Child('Tom');
// const baby2 = new Child('Jerry');
// console.log(baby);
// console.log(baby2);

class Parent{
    constructor(){
        this.fatherName = "Arnold";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name= name;
    }
    getFullName(){   // method used
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child('Tom');
const baby2 = new Child('Jerry');
console.log(baby.getFullName());
console.log(baby2.getFullName());
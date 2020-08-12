// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = "mahi";
//     }

// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

/*
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }

}

const student1 = new Student(12, 'sumon');
const student2 = new Student(15, 'fazle karim');
console.log(student1, student2);

*/

class Student{
    constructor(sId, sName){ // pass object properies that changes
        this.id = sId; // set porperty  with this
        this.name = sName;
        this.schoolName = 'P.N School'; // default or shared properties
    }

}

const student1 = new Student(12, 'sumon');
const student2 = new Student(15, 'fazle karim');
// console.log(student1, student2); // show object
console.log(student1.name, student2.name); // access properties of object
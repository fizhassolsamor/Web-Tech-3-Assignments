let a: number = 27;
let b: number = 37;
 
function Add(first: number, second: number): number {
    return(first + second);
}
 
function Subtract(first: number, second: number): number {
    return(first - second);
}

function Multiply(first: number, second: number): number {
    return(first * second);
}

function Divide(first: number, second: number): number {
    return(first / second);
}
Add(a, b);
Subtract(a, b);
Multiply(a, b);
Divide(a, b);

class Student {
    name: string;
    age: number;
    rollNum: number;

    setName(stdName: string) {
        this.name = stdName;
    }

    setAge(stdAge: number) {
        this.age = stdAge;
    }

    setRollNum(stdRoll: number) {
        this.rollNum = stdRoll;
    }
  
}

class Car{
    model: string;
    color: string;
    price: number;
}

let obj: Car[] = [
    { model: "Honda", color: "Black", price:250 },
    { model: "Toyota", color: "Blue", price:350 },
    { model: "Audi", color: "Mate Black", price:750 }
]
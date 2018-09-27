var a = 27;
var b = 37;
function Add(first, second) {
    return (first + second);
}
function Subtract(first, second) {
    return (first - second);
}
function Multiply(first, second) {
    return (first * second);
}
function Divide(first, second) {
    return (first / second);
}
Add(a, b);
Subtract(a, b);
Multiply(a, b);
Divide(a, b);
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setName = function (stdName) {
        this.name = stdName;
    };
    Student.prototype.setAge = function (stdAge) {
        this.age = stdAge;
    };
    Student.prototype.setRollNum = function (stdRoll) {
        this.rollNum = stdRoll;
    };
    return Student;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var obj = [
    { model: "Honda", color: "Black", price: 250 },
    { model: "Toyota", color: "Blue", price: 350 },
    { model: "Audi", color: "Mate Black", price: 750 }
];

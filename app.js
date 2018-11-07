"use strict";
var myName = "Rakesh";
var myAge = 35;
var myAddress = ["Derna", 14];
// console.log(myAddress);
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log("[myColor]", myColor);
var myCar = "BMW";
// console.log(myCar);
myCar = { make: "BMW", series: 3 };
// console.log(myCar);
//functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello! ");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 3));
// function types
var myMUltiply;
// myMUltiply = sayHello;
// myMUltiply();
myMUltiply = multiply;
myMUltiply(2, 5);
//objects
var userData = {
    name: "Rakesh",
    age: 35
};
var complex = {
    data: [100, 3.88, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.88, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27;
myRealRealAge = "41";
// myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
// never
function neverReturns() {
    throw new Error('An Error');
}
// NUllable Types
var canBenull = 12;
canBenull = null;
var canAlsoBenull;
canAlsoBenull = null;

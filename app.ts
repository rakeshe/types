let myName: string = "Rakesh";
let myAge: number = 35;

let myAddress: [string, number] = ["Derna", 14];
// console.log(myAddress);

enum Color {
  Gray,
  Green = 100,
  Blue
}

let myColor: Color = Color.Blue;
// console.log("[myColor]", myColor);

let myCar: any = "BMW";
// console.log(myCar);

myCar = { make: "BMW", series: 3 };
// console.log(myCar);

//functions
function returnMyName(): string {
  return myName;
}
// console.log(returnMyName());

//void

function sayHello(): void {
  console.log("Hello! ");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 3));

// function types
let myMUltiply: (val1: number, val2: number) => number;

// myMUltiply = sayHello;
// myMUltiply();
myMUltiply = multiply;
myMUltiply(2,5);


//objects
let userData: {name: string, age: number} = {
    name: "Rakesh",
    age: 35
}

let complex: {data: number[], output: (all: boolean) => number[]} ={
    data: [100,3.88, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100,3.88, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = "41";
// myRealRealAge = true;


// check types
let finalValue = 30;
if (typeof finalValue == "number"){
    console.log("final value is a number")   
}

// never
function neverReturns(): never {
    throw new Error('An Error')
}

// NUllable Types

let canBenull = 12;
canBenull = null;
let canAlsoBenull;
canAlsoBenull = null;
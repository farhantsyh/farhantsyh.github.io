//  T H I S


// Cara 1 - Function Declaration

// function hallo(){
//     console.log(this);
//     console.log("Hallo!");
// }

// this.hallo();


// Cara 2 - Object Literal

// var obj = {a : 18, nama : "Farhan"};
// obj.halo = function (){
//     console.log(this);
//     console.log("Hallo!");
// }

// obj.halo();


// Cara 3 - Constructor

function Halo(){
    console.log(this);
    console.log("Hallo!");
}

var obj1 = new Halo();
var obj2 = new Halo();
// var arr = ["Farhan","Agustiansyah","Nova"];

// arr.splice(2,0,"Azza","Rajjo");
// arr.pop();
// arr.splice(1,1);
// arr.unshift("Aang","Gian");
// arr.push("Lutfi","Faqih","Evan","Tahta");

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// var arr2 = arr.slice(5,8);
// console.log(arr2.join());


// var num = [1,2,3,4,5,6,7,8];
// var nama = ['Farhan','Azza','Rajjo'];

// nama.forEach(function(e,i){
//     console.log("Mahasiswa ke - " + (i+1) + " adalah " + e);
// })

var num = [1,2,3,4,5,7,20,9,8,10,30];
// var num2 = num.map(function(e){
//     return e * 2;
// });

// console.log(num2.join('-'));
console.log(num.join(' - '));
var sorting = num.sort(function(a,b){
    return a - b;
});
console.log(num.join(' - '));
//hoisting is a phenomena in which we can excess variables and functions even before initialising it without getting an error.
// console.log(x);
// console.log(getname)
// getname();
// var x= 10;
// in hoisting arrow function behaves like another variable
// var getname = () =>{
//     console.log("krutika vyas");
// }
// getname();
// console.log(x);
// function x(){
//     var a= 7;
//     return function y(){
//         console.log(a);
//     }
//     return y;
// } 
// var z = y(); 
// console.log(z)
// z();

// function x(){
//     for(var i =1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000);
//     }
// }
//     console.log("krutika vyas")
// x();

// function counter(){
//     var count = 0;
//     return function incrementcounter() {
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter()
// counter1();
// counter1()
// counter1()


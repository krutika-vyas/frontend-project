//function statement/function declaration
// must have a name
// can be hoisted
// a();
// b();
// function a() {
//     console.log("a called");
// }
// a();
//function expression
// can be anonymous or named
// can not be hoisted

// var b = function (param1){
//     console.log("b called");
// }
// b(1,2);

//Anonymous function.
// functions without a name is called anonymous function.
// anonymous functions are used in a place where functions are used as values.

//first class functions     
// In js,first class functions mean that functions are treated as values.this allow functions to be: 
// 1.assigned to variables.
// 2.passed as an argument to another functions.
// 3. returned from another functions.

// A function which takes another function as an input to itself or return a function from itself is called high order function and the function which is passed in high order function is called callback function. 

// function a(){
//     var c = 30
//     console.log(c);
// }
// a();

// console.log(c);

// function krutika(){
//     console.log("krutika vyas")
// }
// krutika()
// setTimeout(() => {
//     console.log("timer")
// }, 5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// } 
// );

// const radius = [10,20,30,40,50]
// const calculateArea = function (radius) {
//     const output =[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;
// }
// console.log(calculateArea(radius));
// const area = function (radius){
//     return Math.PI*radius*radius;
// }
// const diameter = function(radius){
//     return 2* radius;
// }
// const circumference = function (radius) {
//     return 2*Math.PI*radius;
// }
// const calculate = function (radius,logic) {
//     const output =[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));
// console.log(calculate(radius,circumference));


// function addtwonumbers(number1,number2){
//     let result = number1 + number2;
//     console.log("siya");
//     return(result);
//     }
//     const result = addtwonumbers(3,5);
//     console.log("Result: ",result);

 
// function impmessage(username){
//     if(!username){
//         console.log("please enter a username");
//         return   
//     }
//    return `${username} just logged in` 
// }
// console.log(impmessage("khushi"));
// console.log(impmessage());

// function calculateprice(val1,val2,...num){
//     return num
// }
// console.log(calculateprice(200,400,600,800))
// const user = {
//     username:"krutika vyas",                        
//     price:200
// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);   
// }
// handleObject(user)
// const mynewArray = [100,400,700,200,600]
// function returnvalue(getArray){
//     return getArray[1]
// }
// console.log(returnvalue(mynewArray));

//callback functions(it gives as access to the whole asynchronous world in a single threaded language)
// setTimeout(function () {
//     console.log("timer");
// },5000);
// function x(y){
//     console.log("x")
//     y();'
// }
// x(function y(){
//     console.log("y")
// })
// y is callback function
// const radius = [5,7,9,2];
// const diameter = function (radius) {
//     return radius*radius;
// }
// const calculate = function(logic){
//     const output = [];
//     for (let i=5; i<=10; i++){
// }
// }
// var x=1;
// a();
// b();
// console.log(x);

// function a() {
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }
// console.log("start");
// setTimeout(() => {
//     console.log("timer")
// }, 1000);
// console.log("end");
// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("callback");
// })
// console.log("end");

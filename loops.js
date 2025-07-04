//for
// for(let i = 0; i <= 10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(i);

// for (let i = 1;i <= 10; i++){ 
//     console.log(`outer loop value: ${i}`);
//    for (let j=1;j <= 10; j++){
//     console.log(i + '*' + j + '=' + i*j);
//     }
// }
// for(let i=0;i<=10;i++){
//         if (i%2!=0){
//             console.log("i=",i);
//        }
//      }
// let myarray = ["flash","batman","superman"]
// console.log(myarray.length);
// for(let index=0; index < myarray.length ;index++){
//     const element = myarray[index];
//     console.log(element);
// }

// break and continue 
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("detected 5");
//         continue  
//     }
//     console.log(`value of i is ${index}`);
// }
// let index = 0
// while(index <=10){
//     console.log(`value of index is ${index}`);
//     index = index+2
// // }
// let friends = ["krutika","krishna","divya"]
// let arr = 0
// while (arr < friends.length) {
//     arr = arr +1
//     console.log(`value is ${friends[arr]}`);
// }

// let score = 1
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <=10);

// for of
// const arr = [1,2,3,4,5]
// for (const num in arr) {
//     console.log(num);
// }
// const greetings = "hii indore"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }
// let marks=[90,95,85,80,97];
// console.log(marks);
// console.log(marks.length);
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// console.log("sum =",sum);
// avg=sum/5;{
//     console.log("average=",avg);
// }
// let names=["krutika","jaya","arushi","anaya","siya"];
// for(let val of names){
//     console.log(val.toUpperCase());
// }

// for of
// for(let val of names){
//     console.log(val);
// }

// Maps
// const map = new Map()
// map.set("IN","INDIA")
// map.set("USA","UNITED STATES OF AMERICA")
// map.set("FR","FRANCE")
// map.set("IN","INDIA")
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-",value);
// }
// for (const key in map) {
//    console.log(key);
// }
const myobject = {
    "game1" : "temple run",
    "game2" : "ludo",
    "game3" : "snake and ladder"
}
//  for (const [key, value] of myobject){
//     console.log(key, ":-",value);
// }
// for (const key in myobject) {
//     console.log(`${key} is ${myobject[key]}`);
// }

// const programming = ["js","java","c","c++"]
// for (const key in programming) {
//     console.log(key); 
// }
// for (const key in programming) {
//     console.log(programming[key]);
// }

// const coding = ["js","c","c++","java"]
// coding.forEach((val) => {
//     console.log(val);
// })
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item ;
// })
// console.log(values);
// const myCoding = [
//     {
//         languageName: "javascript",
//         languagefile: "js"
//     },
//     {
//         languageName: "python",
//         languageFile: "py"
//     },
//     {
//         languageName: "java",
//         languageFile: "java"
//     }
// ]
// myCoding.forEach((item) => {
//     console.log(item.languageName);
// })

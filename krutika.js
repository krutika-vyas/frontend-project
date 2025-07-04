// console.log("my first js on vs code");
// console.log("hello");
// let age=16;
// if (age>=18){
//     console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }
// const account_ID = 122345
// let accountEmail = "krutika.vyas@gmail.com"
// var acc_password = "kkbhai"
// acc_city = "indore"
// accountEmail = "jaya@gmail.com"
// acc_password = "jjbhai"
// acc_city = "mumbai"
// console.table([account_ID,accountEmail,acc_password,acc_city])
// let size=0;
//  let string="javascript";
// for(let i of string){
//     console.log("i=",i); 
//     size++;
// }
// for(let num=0;num<=100;num++){
//      if (num%2==0){
//       console.log("num=",num);
// }}
// let marks=[90,95,85,80,97];
// console.log(marks);
// console.log(marks.length);
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// console.log("sum =",sum);
// avg=sum/5;{
// //     console.log("average=",avg);
// // }

// let names=["krutika","jaya","vicky","teena","sureshji"];
// for(let idx=1;idx<=names.length;idx++){
//     console.log(names[idx-1]);
// }
// for(let val of names){
//     console.log(val.toUpperCase());
// }

// for of
// for(let val of names){
//     console.log(val);
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
// let items=[250,300,900,645,50];
// for(let val of items){
//     offer=items/10;
//     items=items-offer;
//     items++;
// }
// console.log("final price after applying offer=",items);

// let fooditems=["pav bhaji","idli","noodles"];
// fooditems.push("chips");
// console.log(fooditems);
// fooditems.pop();
// console.log(fooditems);
// console.log(fooditems.toString());
// fooditems.unshift("pani puri");
// console.log(fooditems);

// let heroes=["salman","akshay","vicky","sumit"];
// let heroins=["anushka","amita","jaya","neelam"];
// let total= heroes.concat(heroins);
// console.log(total);
// fooditems.shift();
// console.log(fooditems);
// fooditems.slice();
// console.log(fooditems);
// console.log(total.splice(1,3));
// console.log(heroes.splice(3, 1, "radha"));
// console.log(heroes);
// total.splice(3,3,"radha","mohini","siya");
// console.log(total);
// arr=[1,2,4,[4,6,6],[6,87,[76],8,7]]
// newarr=arr.flat(3)
// console.log(newarr);
// console.log(Array.isArray(2));
// console.log(Array.from("krutika"));
// console.log(Array.from({name:"krutika"}));

// let obj={
//     item:"pen",
//     price:10,
// };

// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of",obj.item,"is",obj.price,"rupees");
//  console.log("krutika\nvyas");
// let str="krutika\nvyas";
//  console.log(str.length);

// let string="krutika vyas";
// let newStr= string.toUpperCase();
// console.log(newStr);
// console.log(string.slice(0,7));
// console.log(string.replace("krutika","ritika"));
// console.log(string.includes("krutika"))

// console.log(str.charAt(2));
// console.log(str.charAt(0));
// function myfunction(){
//     console.log("my name is krutika");
//     console.log(" i love js");
// }
// myfunction();
// myfunction();

// function radha(){
//     console.log(10+15);
// }
// radha();
// function siya(msg,n){
//     console.log(msg+n);
// }
// siya("krutika"," vyas");


// function mul(x,y){
//     k=x*y;
//     return k;
// }
// let value=mul(5,10);
// console.log(value);
// //arrow function
// const arrowsum = (x,y) =>{
//     console.log(x+y);
// }
// arrowsum(10,20);

// (a,b)=>{const arrowmul=return(a*b);}
//  arrowmul(10,20);
//  function countvowels(str){
//      let count=0;
//     for(let char of str){
//          if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//              count++;
//          }
//     }
//     return count;                    
// }
// let vyas=countvowels('krutika vyas');
// console.log(vyas);

//CHAI OR CODE
// var score = "kruika"
// console.log(typeof (score));
// var score = true;
// let valueinnumber=(+score)
// console.log(typeof valueinnumber);
// console.log(valueinnumber); 
// var string = "krutika";
// // var string = "";
// Booleanstring = Boolean(string);
// console.log(Booleanstring);

// stack(primitive),heap(non primitive)
// let myfriendname = "radhika"
// let name = myfriendname
// name = "siya"
// console.log(name);
// console.log(myfriendname);

// let user1={
//     name:"krutika",
//     class:12
// }
// let user2=user1
// user2.name="radha"

// console.log(user2.name);
// console.log(user1.name);

//number
// let score=1000.56;
// console.log(score.toString().length);
// console.log(score.toFixed(1));
// console.log(score.toPrecision(1));
// console.log(score.toLocaleString( "en-IN "));    
  
//Maths
// console.log(Math.abs(-19));    
// console.log(Math.round(3.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(9));
// console.log(Math.pow(3,4))
// console.log(Math.max(10,15,20,20.5));
// console.log(Math.min(10,15,20,20.5));
// const min = 10
// const max=20
//  console.log(Math.floor(Math.random() * (max-min+1)) + min)
     
// let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getHours())
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2007,0,30,5,6)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());
// console.log(Date.now());

//singleton
// objects literals
// const jsuser = {
//     fullname: "kratika",
//     age : 18,
//     location:"indore"
// }   
// console.log(typeof jsuser.age)
// console.log(jsuser.fullname)
// console.log(typeof jsuser.location)
// jsuser.age="19"
// Object.freeze(jsuser)
// jsuser.fullname="siya"
// console.log(jsuser)
// jsuser.greeting = function(){
//     console.log("hii jsuser")
// }
// jsuser.greeting2 = function(){
//     console.log(`hii jsuser,${this.fullname}`)
// }
// console.log(jsuser.greeting())                                                        
// console.log(jsuser.greeting2())
// const regularUser={
//     email:"kvc@gmail.com",
//     fullname:{
//         firstname:"krutika",
//         lastname:"vyas"
//     }
// }
// console.log(Object.keys(regularUser));
// console.log(regularUser.fullname.firstname);

// arr=[1,2,4,[4,6,6],[6,87,[76],8,7]]
// newarr=arr.flat()
// console.log(newarr);
// console.log(Array.isArray());
// console.log(Array.from("pagal"));
// console.log(Array.from({name:"krutika"}));
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3=Object.assign ({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);
// const users=[
//     {
//     id:1,
//     email:"kvgmail.com";
//     }
// ]
// console.log(users.email);
// console.log(regularUser);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// const family = {
//     name: "krutika",
//     mothername:"teena",
//     fathername:"suresh"
// }
// console.log(family.mothername)
// const {mothername} = family
// console.log(mothername);
// console.log("krutika vyas");

// export const numbers = [1,2,3,4,5,6,7,8,9]
// const newnums = numbers.filter( (num) => {
//      return num > 5;
// })
// console.log(newnums);

// const books =[
//     { title: "book one", genre: "history",publish : 1999, edition : 2007},
//     { title: "book two", genre: "geography",publish : 1998, edition :2000},
//     { title: "book three",genre: "science",publish : 1989, edition :2014},
//     { title: "book four",genre: "history",publish : 1967, edition :2010},
//     { title: "book five",genre: "science",publish : 1985, edition :2019},
//     { title: "book six",genre: "mythology",publish : 1945, edition :2016},
//     { title: "book seven",genre: "history",publish : 1998, edition :2017},
//     { title: "book eight",genre: "biology",publish : 1990, edition :2018},
// ]
// const userbooks = books.filter( (book) => book.genre === "history")
// console.log(userbooks);
// const userbooks = books.filter( (book) => book.publish >1985 && book.genre === "science")
//  console.log(userbooks);

const mynums = [1,2,3,4,5,6,7,8,9,10]
const nums = mynums.map( (num) => {
    console.log(num);
    return num + 10;
})
// const nums = mynums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num>=50)
console.log(nums);

//reduce
// const mynums = [1,2,3,4,5]
// const mytotal = mynums.reduce(function(accumulator,currentvalue){
//     console.log(`accumulator:${accumulator} and current value:${currentvalue}`);
//     return accumulator + currentvalue
// },0)
// console.log(mytotal);
// const mytotal = mynums.reduce( (accumulator,currentvalue) => accumulator + currentvalue,0)
// console.log(mytotal);

// const shoppingcart = [
//     {
//         itemname:"js course",
//         price:2000
//     },
//     {
//         itemname:"java course",
//         price:2000
//     },{
//         itemname:"python course",
//         price:1000
//     },
// ]
// const pricetopay = shoppingcart.reduce((acc,item) => acc + item.price,0)
// console.log(pricetopay);
// const radius = [3,1,5,6];
// const area = function (radius){
//     return Math.PI*radius*radius;
// };
// const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0 ;i < radius.length;i ++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(radius,area));
// export let a = 10;

// console.log(this);
// function x(){
//     console.log(this);
// }

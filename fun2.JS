//practice part 

// let a1 = function(a,...b) {
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }

// a1(10,20,30)

// let person = {
//   name : "LOKI",
//   age : "293"
// }

// let dev ={
//   ...person
// }

// console.log(person);
// console.log(dev);

// closure

// function Age() {
//   let age = 20
//   function Add() {
//     return ++age
//   }
//  console.log(Add()) 
// }

// console.log(Age()) 

// let book = [
//   {name : "RICH DAD POOR DAD", price:800},
//   {name : "how to be Rich", price:400},
//   {name : "Death Note", price:900},
//   {name : "anne Frank", price:100}
// ]

// book.forEach((x,y,z)=>{console.log(x,y,z)})
// let filter = book.filter((item)=>{return item.price<=400})
// console.log(filter)
// let Total = book.reduce((accumlator,currentPrice)=>{return accumlator+currentPrice.price},0)
// console.log(Total)
// let a = book.forEach((x,y,z)=>{return x,y,z})
// console.log(a)

// function greet() {
//   console.log("HELLO !")
// }
// function Name() {
//   console.log("Loki")
// }

// greet(Name())
// Name(greet())

//Array destructuring
// const numbers = [10,20,30]
// const [x,y,z] = numbers;
// console.log(x);

// const obj1 = {
//     ename : "alok",
//     age : 21 ,
//     greet:function x() {
//         return "hi"
//     }
// }
// const {ename,age,greet} = obj1
// console.log(greet()); 

// (()=>{console.log("hello")})()

// const person = {
//     fname : "alok",
//     lname : "kumar",
//     fullName : function () {
//         return this.fname+" "+this.lname
//     }
// }
// const fullName1 = person.fullName.call()
// console.log(fullName1);

// const person = {
//     fname : "alok",
//     lname : "kumar"
// }

// function person1() {
//     return this
// }
// console.log(person1.call())  

// console.log(a)
// function x() {
//     console.log("x")
//      return function y() {
//         console.log("y")
//         return function z () {
//             console.log("z")
//         }
//     }
// }

// x()()


// const a1 = "RAT";
// const a2 = "AFT";
// const a3 = "ART";

// function Asci(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum;
//   }
  
//   const sum1 = Asci(a1);
//   const sum2 = Asci(a2);
//   const sum3 = Asci(a3);
  
//   if (sum1 === sum2 && sum2 === sum3) {
//     console.log("All three strings are equal");
//   } else {
//     console.log("The strings are not equal.");
//   }

// person = {
//     name : "loki",
//     age : 23
// }
// employee = {
//     ...person
// }
// console.log("before altering")
// console.log(person)
// console.log(employee)
// console.log("after altering")
// person.name = "ALOK"
// console.log(person)
// console.log(employee)

// function hello(a,...b) {
//     console.log(a,b)
// }
// hello(2,3,4,5,6)

// // array destrcturing
// let arr = [10,20,30,40,50]
// let a,b,c,d,e
// [a,b,c,d,e] = arr

// console.log(a)

// //object destructuring
// let person = {
//     name : "loki",
//     age:23
// }
// const {name:employee,age:e_age} = person

// console.log(employee)
// console.log(e_age)

//closure 
// function person() {
//     let age = 22;
//     return function personage() {
//         return ++age;
//     }
   
// }

// const inc = person()
// console.log(inc())

// arr = [10,20,30,40]

// arr.filter((x)=>{return x>20})

// fetch('https://api.github.com/users')
// .then((res)=>res.json())
// .then((data)=>{
//     let h33 = document.createElement('h3')
//     h33.id ='data1'
//     const usernames = data.map((user) => user.login);

//     // Display the usernames
//     h33.innerHTML = `Usernames: <br> ${usernames.join('<br>')}`;
//     document.body.appendChild(h33)
// })
// .catch((error) => {
//     console.error('Error fetching data:', error);
//   });

// function x(a=()=>{console.log("hello")},b) {
//     console.log(a)
//     console.log(b)
// }

// function b() {
//     console.log();
// }

// function a(b) {
//     console.log(b)
// }
// function b() {
//     console.log("b")
// }
// a(b())

// let arr = [10,20,30,40]
// arr.pop()
// console.log(arr)

// arr.push(10);
// console.log(arr); 

// arr.shift();
// console.log(arr); 

// arr.unshift(10);
// console.log(arr); 

// arr.splice(0,2,15);
// console.log(arr);

// let newarr = arr.slice(2);
// console.log(newarr); 

// let person={
//     name:'alok'
// }
// let arr = ['alok']

// console.log(person.name+arr)
// let a = {}+{}
// console.log(a)
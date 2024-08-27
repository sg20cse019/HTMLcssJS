//! var let const example
// console.log(a);
// var a = 10 ;
//  a = 11;
// let b = 10 ;
//  b = 11;
// const c = 10;

// console.log(a,b,c);

//! var supports hoisting but answer will not yet be
//! assigned because it is applied for only declaration

// let d = 10;
// arr = [10,20,"html"]

//! higher order function
// function higherOrder(fun) {
//     console.log("i am higher order fuction");
//     fun()
// }
// function Callback() {
//     console.log("i am callBack function");
// }

// higherOrder(Callback)

//! object Methods
// let person = {
//     name : "Loki",
//     age : 21
// }

// let a = Object.keys(person);
// console.log(a)

// let b = Object.values(person);
// console.log(b)

// let c = Object.entries(person);
// console.log(c);

//! bind
// function product(a,b) {
//     console.log(a*b)
// }

// let product1 = product.bind(this,2)

// product1(2);

//spread operator
// person = {
//     name : "alok",
//     age : 21
// }

// employee = {
//     ...person
// }

// console.log(employee)

//! rest parameter
// function a(a,...b) {
//     console.log(a,b)
// }
// a(10,20,30,40)

//! apply
// let person = {
//     name : "loki",
//     id : 123
// }
// function a (a,b){
//     console.log(this)
//     console.log(a+b)
// }
// a.apply(person,[4,6])

// example2
// let person = {
//     fname : "loki",
//     lname : "thor",
//     id : 123
// }
// function a (){
//     console.log(this.fname+this.lname)
// }
// a.call(person)

//apply
// let person = {
//     name : "loki",
//     id : 123
// }
// function a (a,b){
//     console.log(this)
//     console.log(a+b)
// }
// a.call(person,4,6)

//bind
// let person = {
//     name : "loki",
//     id : 123
// }
// function a (a,b){
//     console.log(this)
//     console.log(a+b)
// }
// let a1 = a.bind(person,4,6)

// a1()

// person = {
//     name : "loki",
//     age : 21
// }
// function a1(a,b) {
//     console.log(a+b)
//     console.log(this)
// }
// a1.apply(person,[1,2])

//map,filter,reduce,forEach

// arr = [10,20,30,40]

// arr.map((e,y,z)=>{
//     console.log(e,y,z);
// })

// arr.filter((x)=>{console.log(x>20)}) //returns boolean values

// const Newarr = arr.filter((x)=>{return x>20})
// console.log(Newarr); //prints all the items grater than 20

// const Newarr = arr.reduce((acc,total)=>{return acc+total},0)
// console.log(Newarr)

// function a(name) {
//     console.log("hello",name);
// }
// function b() {
//     let name = "Loki";
//     return name;
// }
// a(b());

//variable hoisting
// function example() {
//     console.log(a); // Outputs: undefined
//     var a = 10;
//     console.log(a); // Outputs: 10
// }
// example();

//function hoisting works properly
// sayHello(); // Outputs: "Hello, world!"
// function sayHello() {
//     console.log("Hello, world!");
// }

// This will throw an error: sayHi is not a function
//because var sayhi is variable and variable will be hoisted
// but not the variable value it will be undefined
// sayHi();

// var sayHi = function () {
//     console.log("Hi!");
// };

//! ascii to alphabet
//  const Asciii = 66
//  let sum = String.fromCharCode(Asciii)
//  console.log(sum);
//! alphabet to ascii example proving that it is anagram or not
//  function getAsciiSum(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum;
//   }

// function eename() {
//     console.log("alok");
//     age()
// }
// function age() {
//     console.log(21);
// }

// eename()

// person = {
//     name : 'alok',
//     age : 22
// }

// employee = {
//     ...person
// }

// console.log(person);
// console.log(employee)

// function a1(a,...b) {
//     console.log(a,b);
// }

// a1(1,2,3,45,5)

// arr = [10,20,30,40]
// arr.map((x)=>{console.log(x)})

//funtion curring
// function x(params) {
//     console.log("x")
//     return function y(params) {
//         console.log("y")
//        return  function z(params) {
//             console.log("z")
//         }
//     }
// }

// x()()()

// const firstParagraph = document.querySelectorAll('p');
// const firstParagraph = document.getElementsByTagName('p');
// console.log(firstParagraph); // Element object or null

// //split method
// const hello = "hello"

// const arr1 = hello.split("")
// console.log(arr1);

// //reverse method
// const arr2 = arr1.reverse()
// console.log(arr2);

// //join method
// const arr3 = arr2.join("")
// console.log(arr3);

// // all att once
// const the = "TheRock!"
// console.log(the.split("").reverse().join(""))

//!fetch Apis
// fetch("https://dummyjson.com/products")
// .then((data)=>{
// return data.json()
// })
// .then(
//     data1=>{
//         console.log(data1)
//     })
// .catch((err)=>{
//     console.log(err);
// })

// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(json => console.log(json));

// obj = {
//     name : 'ALOK',
//     age : 23
// }
// function person (a) {
//     console.log(this)
//     console.log(a)
// }
// person.call(obj.name)
// person.call(obj.age)

// person.apply(obj.name,["hello","loki"])

// let arr = [10,20,30]
// let arr2 =[...arr,40,50,60]
// console.log(arr2)

// console.log(undefined)
// console.log(undefined+undefined)
// console.log(NaN+NaN)
// console.log(NaN+undefined)
// console.log(undefined+NaN)
// console.log({}+{})
// console.log([]+[])
// console.log({}+[])
// console.log([1,2,3]==[1,2,3])
// console.log(1+'1')
// console.log('1'+1)
// console.log('1'-1)
// console.log(1-'1')

// let a = 11
// console.log(a);
// a =20
// console.log(a)

// local storage
// // Get input from the user
// const userInput = prompt("Enter something:");
// // Store the input in localStorage
// sessionStorage.setItem("userName", userInput);
// // Retrieve the stored value from localStorage
// const storedInput = localStorage.getItem("userName");
// // Print the stored value to the console
// console.log(storedInput);

// async function a() {
//     let Res = await fetch('https://api.github.com/users');
//     let Data = await Res.json();
//     console.log(Data);
// }
// a()

// async function a(){
// 	let resp = await fetch('https://api.github.com/users')
// 	let Data = await resp.json()
// 	console.log(Data)
// 	}
// a()

//localStorage
// let Username = prompt('Enter something');

// localStorage.setItem('username', Username);

// console.log('Data stored');

// let Data = localStorage.getItem('username');

// console.log(Data); // This will log the value entered by the user

// person ={
//     name : "loki",
//     age :23
// }

// function caller(arr) {
//     console.log(this)
//     console.log(arr)
// }

// let a = caller.bind(person.age,[1,2,3])
// a()

// arr = [10,20,30,40]
// arr.map((x,y,z)=>{console.log(x,y,z)})

// let arr1 = arr.filter((x)=>{return x>20 })
// console.log(arr1)

// async function a () {
// 	let resp = await fetch('https://api.github.com/users')
// 	let data = await resp.json()
//     data.forEach(user => {
//         console.log(user);
//     });
// }
// a()

// fetch('https://api.github.com/users')
// .then((res)=>res.json())
// .then((data)=>{console.log(data)})
// .catch((err)=>{throw err})

//!fetch methods

//! GET
// fetch('./db.json',{
//     method:'POST',
//     body: JSON.stringify({ name: 'loki' })
// })
// .then((res)=>res.json())
// .then((data)=>{console.log(data)})

//! POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// })

// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// console.log('hi');
// setTimeout(() => console.log('eventloop'), 1000);
// console.log('bye');

//! localstorage && sessionstorage
// let user = prompt('enter name')
// sessionStorage.setItem('username',user)
// console.log('Data Stored');
// let Data = sessionStorage.getItem('username')
// console.log(Data)

// let element = document.getElementById('myId');
// console.log(element); // Output: <div id="myId">...</div> or null

// let elements = document.getElementsByClassName('myClass');
// console.log(elements); // Output: HTMLCollection(3) [div.myClass, p.myClass, span.myClass, ...]

// let elements1 = document.getElementsByTagName('div');
// console.log(elements1); // Output: HTMLCollection(5) [div, div, div, div, div, ...]

// let elements2 = document.querySelectorAll('.myClass');
// console.log(elements2); // Output: NodeList(3) [div.myClass, p.myClass, span.myClass, ...]

// console.log("1"-1);

// person={
//     name : "alok",
//     age : 23
// }

// function a(c) {
//     console.log(this)
//     console.log(c)
// }

// // a(person)
// a.call(person,[10,20,30])
// a.apply(person,[10,20,30])

// let h1 = document.querySelector('h1')
// let btn = document.querySelector('button')
// let count = 0;

// btn.addEventListener('click',()=>{
//     h1.innerText = ++count
// })

//! programming
//! 1.addition of two numbers
// function add(a,b) {
//     return a+b;
// }
// console.log(add(4,6))
//! 2. finding maxium array
// function MAX(arr) {
//     arr = [10,20,30,40]
//     return Math.max(...arr)
// }
// console.log(MAX())
//! 3. palindrome
// function palindrome() {
//     let str1 = 'AKA'
//     let str2 = str1.split('').reverse().join('')
//     if (str1==str2) {
//         console.log('string is palindrome '+ str2)
//     }else{
//         console.log('string is not palindrome')
//     }
// }
// palindrome()
//?example
// let str = 'hello'
// let str2 = str.split('')
// console.log(str2)
// str3 = str2.reverse()
// console.log(str3)
// str4 = str3.join('')
// console.log(str4)

//! 4. reverse a string
// let str1 = 'hello';
// let str2 = str1.split('').reverse().join('')
// console.log(str2)

//! 5. array of even numbers
// let arr = [10,20,30,40,50]
// let arr2 = arr.filter((x)=>{
// return x % 2 === 0;})
// console.log(arr2)

//! 6. factorial of the number
// function fac(number) {
//     if(number === 0 || number === 1 ){
//         return 1;}else{
//         return number * fac(number-1)}
// }
// console.log(fac(5))

//! yt video (https://www.youtube.com/watch?v=qJGR9lLcRc0)
//! 1. reverse a string
// var str = 'hello ji kaise ho'
// var str2 = str.split('').reverse().join('')
// console.log(str2)
//! 2. given object or array is array or not ??
// function check(elem) {
//     return Array.isArray(elem)
// }
// console.log(check([]))
// console.log(check({}))
//! 3. empty an array
//? method 1
// let arr = [1,2,3]
// arr = []
// console.log(arr)
//? method 2
// let arr = [1,2,3]
// let arr2 = arr.map((x)=>x='')
// console.log(arr2)
//? method 3 (without using both methods)
// let arr = [1,2,3]
// let arr2 = arr.length = 0
// console.log(arr2)

//! 4. check the no is integer or not
//? method 1
// let num = 32
// function numb() {
//     console.log(num)
//     return Number.isInteger(num)
// }
// console.log(numb())
// console.log(num)
//? method 2
// function num(x) {
//     if(x%1===0) return true
//     else return false
// }
// console.log(num(12.5))

//! 5.duplicate the string
// let arr = [1,2,3,4]
// console.log(arr.concat(arr))

//! 6. reverse a number
//? method 1
// let num = 1234567
// function reversekaro() {
//     return Number(num.toString().split('').reverse().join(''))
// }
// console.log(reversekaro())
//? method 2
// let num = 12345
// function reversekaro() {
//     var rev = 0;
//     while (num>0) {
//         let rem = num%10
//         rev = rev*10+rem
//         num = Math.floor(num/10)
//     }
//     return rev
// }
// console.log(reversekaro())

//! 7.palindrome or not ?
//? method 1
// let str = 'Lol'
// let str2 = str.split('').reverse().join('')
// if (str.toUpperCase()===str2.toUpperCase()) {
//     console.log("yes it is palindrome")
// }else {
//     console.log('it is not a palindrome')
// }

// //! 8. sort the given array in alphabetical order
// let a = 'ALOKinnnnini'
// console.log(a.toUpperCase().split('').sort().join(''))

//! 9. make the first letter uppercase
// let word = 'harsh bhai kaise ho'.split(' ')
// // console.log(word)
// let allWords = word.map((x)=>
//  x.charAt(0).toUpperCase()+x.substring(1)
// )
// let cap =allWords.join(' ')
// console.log(cap)

//! 10. no of occurences
// let str = 'apple'
// let arr = str.split('')
// let obj = {};

// function count() {
//     let obj2 = arr.map((elem)=>{
//         if (obj.hasOwnProperty(elem)==false) {
//          return obj[elem]=1
//         }else{
//             return ++obj[elem]
//         }
//     })
//     return obj
// }
// console.log(count())

//! 11. loop an number and all numbers to it
// let arr = [10,20,30,40]
// let sum = 0;

// for (let i = 0; i< arr.length; i++) {
//     sum = sum+arr[i]
// }
// console.log(sum)

//? method 2
// let arr1 = arr.reduce((x,y)=>{
//     return x+y
// },0)
// console.log(arr1)

//! 13. removing specified key:value/objects pair from obj
// let arr = [
//   { name: "loki", gender: "male" },
//   { name: "sylvie", gender: "female" },
//   { name: "loki", gender: "male" }
// ];
//? method 1
// let arr2 =arr.filter((x)=>{return x.gender=='male'})
// console.log(arr2)
//? method 2

//! 14. reversing a array
// arr = [10,20,30,40,50]

// let start = 0;
// let end = arr.length-1;

// while(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     start++
//     end--
// }
// console.log(arr)

//! DOM
// let div = document.getElementsByTagName('div');
// console.log(div);

// console.log(Array.isArray(div))
// console.log(Array.from(div))

//!LOOPS
// let array = [10,20,30,40,50]
//! For LOOP
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
// }
//! While LOOP
// let i = 0;
// while (i<array.length) {
//     console.log(array[i])
//     i++
// }
//! For of LOOP
// for(i of array){
//     console.log(i)
// }
//! For in LOOP
// for(i in array){
//     console.log(array[i])
// }

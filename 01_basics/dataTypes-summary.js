// #Primitive

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 354414641546451n

// Reference (Non primitive)

//Array, Objects, Functions

// const heros = ['shaktiman','naagraj', 'doga'];

// let myObj={
//     name: 'Bikash',
//     age:24
// }


// const myFunction = function () {
//     console.log('hello world');
// }

//************************************************* */

// Stack(Primitive), Heap(non-primitive)

let myYoutubeName = 'bikashdebta';

let anotherName = myYoutubeName;
anotherName = 'chaiorcode'


console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email:'user@google.com',
    upi:'user@ybl'
}

let userTwo = userOne

userTwo.email = "bikash@google.com"
console.log(userOne.email);
console.log(userTwo.email);
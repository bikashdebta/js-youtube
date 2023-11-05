

function sayMyname(){
    console.log('b');
    console.log('i');
    console.log('k');
    console.log('a');
    console.log('s');
    console.log('h');
};

// sayMyname()

// function addTwoNumbers(num1,num2){
//  console.log(num1 + num2);
// }


function addTwoNumbers(num1,num2){

    // let result = num1 + num2
    // return result

    return num1 + num2

}

const result =   addTwoNumbers(3,4);

// console.log('Result', result);


function loginUserMessage(username){
    if(!username) {
   console.log(`Please enter a username`);
   return
    }
return `${username} just logged in`
}


// console.log(loginUserMessage());


function calculateCartPrice(...num1){
return num1
}

console.log(calculateCartPrice(200,400,600));



const user = {
    username: 'Bikash',
    price:1999
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myArr = [200,400,100,600];

function  returnSecondValue(getarr){
    return getarr[1]
}

console.log(returnSecondValue(myArr));
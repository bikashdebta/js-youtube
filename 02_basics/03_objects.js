//singleton
// Object.create()

//object literals

const mySym = Symbol('key1')


const jsUser = {
    name:'Bikash',
    [mySym]:'mykey1',
    age:18,
    location:'sambalpur',
    email:'bikash@google.com',
    isLoggedIn:false,
    lastLoginDays:['mon','sat']
}
// 
console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser[mySym]);

jsUser.email = 'bikash@chatgpt.com'
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = 'bikash@microsoft.com'
// console.log(jsUser);

jsUser.greeting = function(){
    console.log('Hello JS user');
}

// console.log(jsUser.greeting());

console.log(jsUser.greeting());
const user = {
    username: 'bikash',
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage();
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);


// function chai() {

//     let username = 'bikash'
//     console.log(this.username);
// }

// chai()



// const chai = function() {
    
//     let username = 'bikash'
//     console.log(this.username);
// }



// const chai = () => {
    
//     let username = 'bikash'
//     console.log(this.username);
// }

// chai()



// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(4,3));







//Implicit return................................
// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => ({username:'bikash'});



console.log(addTwo(3,4));


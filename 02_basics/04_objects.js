// const tinderUser = new Object() //singleton

const tinderUser = {} //non-singleton

tinderUser.id = '123abc'
tinderUser.name = 'sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:'sam@google.com',
    fullname:{
        userFullName:{
            firstName:'bikash',
            lastName:'debta'
        }
    }
}

// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {
    1:'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}

// const obj3 = {
//     obj1,obj2
// }

// const obj3 =   Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

// *******************************************************************
// ******************Destructuring of obj*****************************

const course = {
    coursename:'js in hindi',
    price:'999',
    courseInstructor:'hitesh'
}


const {courseInstructor:instr} = course

// console.log(courseInstructor);
console.log(instr);

// {
//     "name":'Bikash',
//     "coursename": 'js in hindi',
//     "price":'free'
// }
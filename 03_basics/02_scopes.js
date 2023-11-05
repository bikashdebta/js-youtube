if (true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);//block scope
// console.log(b);//block scope
// console.log(c);//global scope



function one() {
    const username = 'bikash'

    function two() {
        const website = 'youtube'
        console.log(username);
    }

    // console.log(website);

    // two()
}

one()


if(true){
    const username = 'bikash'
    if(username === 'bikash'){
        const website = 'youtube'
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


//*********interesting*************** 


console.log(  addone(5))

function addone(num) {
    return num + 1
}



const addTwo = function(num) {
    return num + 2
}


addTwo(5)
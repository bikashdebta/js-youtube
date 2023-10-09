const accountId = 144553
let accountEmail = 'bikash@google.com'
var accountPassword = '12345'
accountCity = 'jaipur'
let accountState;


// accountId = 2 // not allowed
accountEmail ='hc@hcgmail.com'
accountCity = 'Bangaluru'
accountPassword='252525'


console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

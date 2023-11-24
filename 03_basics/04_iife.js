// Immediately invoked function


(function chai(){
    console.log('DB connected');
})();

((name)=>{
 console.log(`Db connected2 ${name}`);
})('bikash')
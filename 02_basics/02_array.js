const marvel_heros = ["thor","ironman","spiderman"]
const dc = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros =  marvel_heros.concat(dc);
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc]
// console.log(allNewHeros);



const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)

console.log(realAnotherArr);

console.log(Array.isArray('bikash'))
console.log(Array.from('bikash'))
console.log(Array.from({name:'bikash'})) //interesting


let score1 = 100;
let score2 = 200;
let score3 =300;

console.log(Array.of(score1,score2,score3));


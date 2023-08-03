//map 
const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(element => element + 30);
console. log (mapped); 
//filter 
const arr2 = [1, 2, 3, 4, 5, 6];
const filtered = arr. filter(element => element = 2 || element === 4);
console. log(filtered); 
//sort 
const arr3 = [1, 2, 3, 4, 5, 6];
const alphabet = ["ff", "a", "с", "v", "z"];
 
descend  = arr.sort((a, b) =>a>b?-1 : 1);
console. log (descend); 

ascend = alphabet. sort((a, b) => a >b ? 1:-1);
console. log (ascend);
// forEach 
const arr4 = [1, 2, 3];
 arr. forEach (element =>{
console. log (element)});
//concat 
const arre =  ["a", "b", "c"];
const arrt= ["d", "e", "f"];
  console. log (arre. concat (arr2)); 
  console. log (arre); 
  console. log (arrt); 
//every 
const arrtt= [1, 2, 3, 4, 5, 6, 7];
const greaterFive = arr.every(num => num > 5);
console.log(greaterFive); 

const lessnine = arr.every(num=> num< 9)
console.log(lessnine); 
// some 
const arrc = [1, 2, 3, 4, 5, 6];
console. log(arrc.includes(2)); 
console. log(arrc.includes(7)); 
// includes 
const arrd =[1,2,3,4,5,6]
    console. log(arrd.includes(2)); // true
    console. log(arrd.includes(7)); // false
    
//join 
const arrf = ["m", "a", "n", "d", "e", "e", "p"];
console. log(arrf.join('')); 
//reduce 
const arrg = [1, 2, 3, 4, 5, 6];
const reduced = arrg.reduce((total, current) => total + current);
console. log(reduced); 
// find 
const arrw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arrw.find(element => element > 5);
console. log(found); 
//findIndex
 const arr9 = ["Danny", "Mandeep", "John", "Ruby"];
const indexFinder = arr9.findIndex(element => element === "Mandeep");
console.log (indexFinder)
//fill 
const arrv= new Array(3)
console. log(arrv); 
console. log(arrv.fill(10)); 
//slice 
const arrn = ["a","b","c","d","e"]
const sliced = arr.slice(2, 4);
console. log(sliced); // ["c", "d"
console. log(arrn); 
// reverse 
const arrl = [1, 2, 3];
arrl.reverse();
console. log(arrl); 
// push 
 const cars = ["bmw", "mercedes"];
console. log(fruits.push("porshe")); 
console. log(fruits);
// pop
const colors = ["red", "pourple"];
fruits.pop();
console. log(colors); 
// shift 
const carss = ["mazda", "Renault"];
carss.shift();
console. log(carss); 
//unshift
const pc = ["Apple", "HP"];
console. log(pc.unshift("Lenovo")); 
console. log(pc); 




 





    
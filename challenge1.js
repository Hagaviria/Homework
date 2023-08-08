const function1 = function (x){
    
    if ( x % 2 === 0){
        console.log ("El numero es par");
    }else{
        console.log ("el numero es impar");
    }
    return x
}
console.log (function1(4))

const function2 = (x) => {

    if ( x % 2 === 0){
        console.log ("El numero es par");
    }else{
        console.log ("el numero es impar");
    }
    return x

} 
console.log (function2(9))
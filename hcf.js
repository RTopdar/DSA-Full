const findGCD = (a, b)=>{
    let gcd = 1;
    let i;
    for( i = 1; i <= (Math.min(a,b)); i++ ){
        if(a%i === 0 && b%i === 0){
            gcd = i
        }
    }
    return gcd;
}

console.log(findGCD(12, 15)); 
console.log(findGCD(56, 98)); 
console.log(findGCD(101, 10)); 
console.log(findGCD(48, 180)); 
console.log(findGCD(17, 19)); 

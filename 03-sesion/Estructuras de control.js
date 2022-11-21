let result = 1;

for (let i = 10; i > 0; i--) {
    result *= i;
}
console.log(result);

//////////////////////
// Bucle while

let dato = 10;
let resu = 1;
while (dato > 0) {
    resu *= dato
    dato--;
}
console.log(resu);

function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1){
        return 1;
    } 
    while (num > 1) { 
        num--;
        result *= num;
    }
    return result;
}
console.log(factorialize(10));

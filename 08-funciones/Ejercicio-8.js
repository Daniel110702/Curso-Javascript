function siempre() {
    return true;
}

console.log(siempre());

const miPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve()
    }else {
        reject()
    }
});

miPromesa
   .then(() => console.log("Hola soy una promesa"))
   .catch(() => console.log("ERROR"))

   function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
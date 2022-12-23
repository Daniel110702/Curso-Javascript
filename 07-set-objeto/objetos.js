const datosPersonales = {
    name: "Daniel",
    lastname: "Dominguez",
    age: 20,
    height: 170,
    isDeveloper: true
}

const edad = "age";
console.log(datosPersonales[edad]);

const datosPersonales2 = [
    { nombre: "Daniel", apellido: "Dominguez", age: 20, altura: 170, isDeveloper: true},
    { nombre: "Alberto", apellido: "Marquez", age: 22, altura: 180, isDeveloper: false},
    { nombre: "Juan", apellido: "Dominguez", age: 18, altura: 175, isDeveloper: false}
];

const newList = datosPersonales2.sort((a, b) => a.age - b.age);
console.log(newList);


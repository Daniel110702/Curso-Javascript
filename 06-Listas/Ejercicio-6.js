/// Lista de la compra

const compra = ["Jabon", "Desodorante", "Pasta dental", "Detergente", "suavizante"];

compra.unshift("Aceite de girasol");

console.log(compra);

compra.shift("Aceite de girasol");
console.log(compra);

const peliFavorita = [
    { titulo: "Harry Potter", director: "David Yates", fecha: 2001 },
    { titulo: "Star wars", director: "George Lucas", fecha: 1999},
    { titulo: "interstellar", director: "Christopher Nolan", fecha: 2014}
];
const fechaEstreno = peliFavorita.filter(age => age.fecha > 2010);

console.log(fechaEstreno);

const listDirectores = peliFavorita.map( valor => valor.director);

console.log(listDirectores);

const listTitulos = peliFavorita.map(valor => valor.titulo);
console.log(listTitulos);


const concatList = listTitulos.concat(listDirectores);
console.log(concatList);

const ListPropagacion = [...listDirectores, ...listTitulos];
console.log(ListPropagacion);
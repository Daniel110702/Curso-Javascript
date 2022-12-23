const fechaHoy = new Date();
console.log(fechaHoy);


const fechaNacimiento = new Date(2002, 06, 11);
console.log(fechaNacimiento);

const posteriorA = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(posteriorA);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const ageNacimiento = fechaNacimiento.getFullYear();
console.log(ageNacimiento);
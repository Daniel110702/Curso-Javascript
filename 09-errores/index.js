const logger = require('./logger/modelo');


const funcionError = valor => {
    if (typeof valor === "number") {
        return valor * 2;
    }
    throw new Error("El valor debe ser de tipo numero");
}

const numero = "8";
try {
    logger.info("La funcion se esta ejecutando de forma correcta");
    const doble = funcionError(numero);
    console.log(doble);
} catch(e) {
    logger.error("ERROR!");
}

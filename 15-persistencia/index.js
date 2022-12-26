let name = "Daniel";
let lastname = "Dominguez";

const persona = {
    nombre: "Daniel",
    apellido: "Dominguez"
}

// sessionStorage.setItem("Persona", JSON.stringify(persona));
// localStorage.setItem("persona", JSON.stringify(persona));

const ahora = new Date();

// document.cookie = `persona=${JSON.stringify(persona)};expires=` + new Date(ahora.getTime() + 2 * 60000).toUTCString();

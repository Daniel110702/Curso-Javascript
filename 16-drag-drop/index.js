const secciones = document.querySelectorAll(".seccion");
const parrafos = document.querySelectorAll(".parrafo");
const papeleras = document.querySelector(".papelera");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id)
    });

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    });

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});

papeleras.forEach(papelera => {
    papelera.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        const papel = document.getElementById(id_parrafo);
        papelera.remove(papel);
    });
});

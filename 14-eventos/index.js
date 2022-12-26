const clik = document.querySelector("#btn");

clik.addEventListener("click", () => {
    console.log("Click en el boton")
})

$("#btn-query").click(() => {
    console.log("Estoy usando JQuery")
})
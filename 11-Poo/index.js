class Estudiantes {
    name = "Daniel"
    asignature = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return{ 
            name: this.name,
            asignatura: new Set(this.asignature)
        }
    }
}

const estudiante = new Estudiantes

console.log(estudiante.obtenDatos())
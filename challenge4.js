class Cola {
    constructor(){
        this.cola = [];
    }

    encolar(valor){
        this.cola.push(valor);
        return this.cola;
    }

    desencolar(){
        return this.cola.shift();
    }

    verFrente(){
        return this.cola[0];
    }

    tamaño(){
        return this.cola.length;
    }

    estaVacia(){
        return this.cola.length === 0;
    }

    imprimir(){
        console.log(this.cola);
    }
}

class Persona {
    constructor(nombre, horaLlegada) {
        this.nombre = nombre;
        this.horaLlegada = horaLlegada;
    }
}

const colaAtm = new Cola();

const datosPersonas = [
    { nombre: "Harold", horaLlegada: "10:00 AM" },
    { nombre: "Al", horaLlegada: "10:15 AM" },
    { nombre: "Raul", horaLlegada: "10:30 AM" },
    { nombre: "Eva", horaLlegada: "11:00 AM" },
    { nombre: "Daniela", horaLlegada: "11:20 AM" },
    { nombre: "Sara", horaLlegada: "11:30 AM" },
    { nombre: "Dario", horaLlegada: "12:00 PM" },
    { nombre: "Emila", horaLlegada: "12:15 PM" },
    { nombre: "Alejandra", horaLlegada: "12:30 PM" },
    { nombre: "Luisa", horaLlegada: "12:45 PM" }
];

datosPersonas.forEach(personaData => {
    const persona = new Persona(personaData.nombre, personaData.horaLlegada);
    colaAtm.encolar(persona);
});
colaAtm.imprimir();

console.log("Tamaño de la cola:", colaAtm.tamaño());

console.log("Próxima persona:", colaAtm.verFrente());

console.log("Tamaño de la cola después de procesar:", colaAtm.tamaño());

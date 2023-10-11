class Libro {
    constructor(titulo, isbn, autor, editorial) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
}

class PilaLibros {
    constructor() {
        this.pila = [];
    }

    push(valor) {
        this.pila.push(valor);
        return this.pila;
    }

    pop() {
        return this.pila.pop();
    }

    peek() {
        return this.pila[this.pila.length - 1];
    }

    size() {
        return this.pila.length;
    }

    print() {
        console.log(this.pila);
    }
}

const libros = [
    new Libro("Libro 1", "ISBN123", "Autor A", "Editorial X"),
    new Libro("Libro 2", "ISBN456", "Autor B", "Editorial Y"),
    new Libro("Libro 3", "ISBN789", "Autor C", "Editorial Z"),
    new Libro("Libro 4", "ISBN101", "Autor D", "Editorial W"),
    new Libro("Libro 5", "ISBN102", "Autor E", "Editorial V"),
    new Libro("Libro 6", "ISBN103", "Autor F", "Editorial U"),
    new Libro("Libro 7", "ISBN104", "Autor G", "Editorial T"),
    new Libro("Libro 8", "ISBN105", "Autor H", "Editorial S"),
    new Libro("Libro 9", "ISBN106", "Autor I", "Editorial R"),
    new Libro("Libro 10", "ISBN107", "Autor J", "Editorial Q")
];

const pilaDeLibros = new PilaLibros();

libros.forEach(libro => pilaDeLibros.push(libro));

pilaDeLibros.print();

console.log("Libro en la parte superior:", pilaDeLibros.peek());

pilaDeLibros.pop();

pilaDeLibros.print();

console.log("Tamaño de la pila:", pilaDeLibros.size());

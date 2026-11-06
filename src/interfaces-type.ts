export {};

//Interfaz
// Define la estructura que tiene que tener un objeto
interface Alumno {
  nombre: string;
  edad: number;
  curso: string;
}

const alumno1: Alumno = {
  nombre: "Elu",
  edad: 19,
  curso: "1° año",
};
console.log(alumno1);
console.log(alumno1.nombre);

// si falta una propiedad o el tipo no coincide, da error:
// const alumno2: Alumno = { nombre: "Ana", edad: "20" };

// una interfaz también puede describir funciones dentro del objeto
interface Calculadora {
  sumar(a: number, b: number): number;
}

const miCalculadora: Calculadora = {
  sumar(a, b) {
    return a + b;
  },
};
console.log(miCalculadora.sumar(3, 4)); // 7

// Type
// también define la forma de un objeto
type Producto = {
  nombre: string;
  precio: number;
};

const producto1: Producto = {
  nombre: "Teclado",
  precio: 25000,
};
console.log(producto1);

// pero type además sirve para cosas que interface no puede:
// uniones y tipos primitivos
type Id = string | number;
type Estado = "pendiente" | "aprobado" | "rechazado";

const idPedido: Id = 1050;
const estadoPedido: Estado = "aprobado";
console.log(idPedido);
console.log(estadoPedido);

//propiedad opcional
// se pone ? después del nombre de la propiedad
interface Contacto {
  nombre: string;
  telefono?: string;
}

const contacto1: Contacto = { nombre: "Luis", telefono: "3704-111222" };
const contacto2: Contacto = { nombre: "Marta" }; // sin teléfono, no da error

console.log(contacto1);
console.log(contacto2);
console.log(contacto2.telefono);

// también funciona igual con type
type Mascota = {
  nombre: string;
  raza?: string;
};
const mascota1: Mascota = { nombre: "Firulais" };
console.log(mascota1);

// Cuando usar cada uno
// interface: para objetos, y se puede extender con extends
interface Persona {
  nombre: string;
}
interface Profesor extends Persona {
  materia: string;
}
const profe: Profesor = { nombre: "Carlos", materia: "TLP" };
console.log(profe);

// type, para uniones, literales o combinar tipos con &
type ConEmail = { email: string };
type Usuario = Persona & ConEmail;
const usuario: Usuario = { nombre: "Ana", email: "ana@mail.com" };
console.log(usuario);

export {};

// parametros

//Se indica colocando : después del nombre de cada parámetro y después el tipo de dato.
function presentar(nombre: string, edad: number) {
  console.log(`me llamo ${nombre} y tengo ${edad} años`);
}
presentar("elu", 19);

// retorno
// Se pone : y el tipo después de los paréntesis

// retornos primitivos
function multiplicar(a: number, b: number): number {
  return a * b;
}
console.log(multiplicar(4, 5));

//retorno complejo
function duplicarTodos(lista: number[]): number[] {
  return lista.map((n) => n * 2);
}
console.log(duplicarTodos([1, 2, 3]));

// void: la función no devuelve nada
function mostrarMensaje(mensaje: string): void {
  console.log(`Mensaje: ${mensaje}`);
}
mostrarMensaje("TP de TypeScript");

//Retornos opcionales

//puede devolver un valor opcionalmente.
function buscarNota(alumno: string): number | undefined {
  if (alumno === "Ana") {
    return 9;
  }
  return undefined;
}

const notaAna = buscarNota("Ana");
console.log(notaAna);

const notaPedro = buscarNota("Pedro");
console.log(notaPedro);

//Never
// Se usa para funciones que lanzan un error o que ejecutan un bucle infinito y jamás completan un retorno normal.

function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

//un parámetro opcional
//El parámetro opcional añade una especie de union de tipo undefined.

function construirNombre(nombre: string, apellido?: string): string {
  if (apellido) {
    return `${nombre} ${apellido}`;
  }
  return nombre;
}

let usuario1 = construirNombre("Carlos", "Santana");
let usuario2 = construirNombre("Ana");

console.log(usuario1);
console.log(usuario2);

//parámetro por defecto
//Un parámetro por defecto sirve para que el parámetro tenga un valor predeterminado en caso de que el usuario no lo coloque.

function calcularDescuento(precio: number, porcentaje: number = 10): number {
  return precio - precio * (porcentaje / 100);
}
console.log(calcularDescuento(100));
console.log(calcularDescuento(100, 20));

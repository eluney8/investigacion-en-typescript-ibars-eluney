// tipo string
let nombre: string = "martin";
let saludo: string = `hola, ${nombre}`;

console.log(nombre);
console.log(saludo);

// tipo number
let edad: number = 20;
let precio: number = 1500.75;

console.log(edad);
console.log(precio);  

//tipo boolean
let estaAprobado: boolean = true;
let tieneDeuda: boolean = false;

console.log(estaAprobado);   // true
console.log(tieneDeuda);     // false

//formas para declarar un array

//usanndo corchetes
let listaDeNumeros: number[] = [1, 2, 3];

console.log(listaDeNumeros);
console.log(listaDeNumeros[2]);

//usando <>
let notas: Array<number> = [7, 8, 9];

console.log(notas);
console.log(notas[1]);

//agregar un elemento
listaDeNumeros.push(4);
console.log(listaDeNumeros);

//recorrer un array
for (const numero of listaDeNumeros) {
  console.log(numero);
};

// union
let id: string | number;

id = 1234;
console.log(id);   

id = "ABC-99";
console.log(id);

//union con alias
type Codigo = string | number;
let codigoProducto: Codigo = 501;
console.log(codigoProducto);

// array que acepta dos tipos
let mezcla: (string | number)[] = ["uno", 2, "tres", 4];
console.log(mezcla);

//evitar array
let dato: any = "hola";
dato = 42;
dato = true;
console.log(dato);  

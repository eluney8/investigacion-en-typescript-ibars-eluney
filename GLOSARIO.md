# Glosario de TypeScript

## 1. Superconjunto

Lenguaje que incluye todo lo de otro lenguaje y además le agrega cosas nuevas. TypeScript es un superconjunto de JavaScript: todo código JavaScript válido también es TypeScript válido, pero TypeScript suma los tipos.

## 2. Transpilar

Traducir código de un lenguaje a otro de un nivel parecido. En TypeScript, transpilar es convertir los archivos `.ts` en archivos `.js` que Node o el navegador pueden ejecutar.

## 3. Tipado estático

Forma de trabajar en la que el tipo de cada variable se conoce antes de ejecutar el programa. Así los errores aparecen mientras se escribe el código y no al ejecutarlo.

```typescript
let edad: number = 20;
// edad = "veinte";
console.log(edad);
```

## 4. npx

Comando que viene con npm y sirve para ejecutar herramientas instaladas dentro del proyecto (en `node_modules`) sin tener que instalarlas en toda la computadora. Por ejemplo, `npx tsc` ejecuta el TypeScript del proyecto.

## 5. devDependencies

Sección del `package.json` donde se guardan los paquetes que solo se usan mientras se desarrolla, como `typescript`, `tsx` o `@types/node`. Se instalan con `npm i -D`.

## 6. Alias de tipo

Nombre que se le da a un tipo con la palabra `type` para poder reutilizarlo en varias partes del código.

```typescript
type Id = string | number;

let idAlumno: Id = 25;
let idCurso: Id = "TLP-2";
console.log(idAlumno, idCurso);
```

## 7. Promesa (Promise)

Objeto que representa un valor que todavía no está disponible pero que va a llegar más adelante. Las funciones `async` siempre devuelven una promesa.

```typescript
async function obtenerNombre(): Promise<string> {
  return "Elu";
}

obtenerNombre().then((nombre) => console.log(nombre));
```

## 8. typeof

Operador que devuelve el tipo de un valor mientras el programa se ejecuta, como texto (`"string"`, `"number"`, `"boolean"`, etc.).

```typescript
let mensaje: string = "hola";
let cantidad: number = 5;

console.log(typeof mensaje);
console.log(typeof cantidad);
```

## 9. push()

Método de los arrays que agrega uno o más elementos al final. En TypeScript solo deja agregar elementos del tipo del array.

```typescript
let frutas: string[] = ["manzana", "pera"];
frutas.push("banana");
console.log(frutas);
```

## 10. map()

Método de los arrays que recorre cada elemento, le aplica una función y devuelve un array nuevo con los resultados. No modifica el array original.

```typescript
let precios: number[] = [100, 200, 300];
let conAumento: number[] = precios.map((precio) => precio * 1.1);
console.log(conAumento);
```

## 11. find()

Método de los arrays que devuelve el primer elemento que cumple una condición. Si no encuentra ninguno, devuelve `undefined`, por eso su tipo de retorno es `tipo | undefined`.

```typescript
let edades: number[] = [12, 17, 21, 30];
let primerMayor: number | undefined = edades.find((e) => e >= 18);
console.log(primerMayor);
```

## 12. toUpperCase()

Método de los strings que devuelve el mismo texto pero en mayúsculas.

```typescript
let materia: string = "taller de lenguajes";
console.log(materia.toUpperCase());
```


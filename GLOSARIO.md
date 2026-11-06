# Glosario de TypeScript

## Superconjunto

Lenguaje que incluye todo lo de otro lenguaje y además le agrega cosas nuevas. TypeScript es un superconjunto de JavaScript: todo código JavaScript válido también es TypeScript válido, pero TypeScript suma los tipos.

## Transpilar

Traducir código de un lenguaje a otro de un nivel parecido. En TypeScript, transpilar es convertir los archivos `.ts` en archivos `.js` que Node o el navegador pueden ejecutar.

## Tipado estático

Forma de trabajar en la que el tipo de cada variable se conoce antes de ejecutar el programa. Así los errores aparecen mientras se escribe el código y no al ejecutarlo.

```typescript
let edad: number = 20;
// edad = "veinte";
console.log(edad);
```

## npx

Comando que viene con npm y sirve para ejecutar herramientas instaladas dentro del proyecto (en `node_modules`) sin tener que instalarlas en toda la computadora. Por ejemplo, `npx tsc` ejecuta el TypeScript del proyecto.

## devDependencies

Sección del `package.json` donde se guardan los paquetes que solo se usan mientras se desarrolla, como `typescript`, `tsx` o `@types/node`. Se instalan con `npm i -D`.

## Alias de tipo

Nombre que se le da a un tipo con la palabra `type` para poder reutilizarlo en varias partes del código.

```typescript
type Id = string | number;

let idAlumno: Id = 25;
let idCurso: Id = "TLP-2";
console.log(idAlumno, idCurso);
```

## typeof

Operador que devuelve el tipo de un valor mientras el programa se ejecuta, como texto (`"string"`, `"number"`, `"boolean"`, etc.).

```typescript
let mensaje: string = "hola";
let cantidad: number = 5;

console.log(typeof mensaje);
console.log(typeof cantidad);
```

## toUpperCase()

Método de los strings que devuelve el mismo texto pero en mayúsculas.

```typescript
let materia: string = "taller de lenguajes";
console.log(materia.toUpperCase());
```


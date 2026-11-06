export {};

//enum
// conjunto de constantes con nombre
enum Dia {
  Lunes,
  Martes,
  Miercoles,
}
console.log(Dia.Lunes);
console.log(Dia.Martes);
console.log(Dia[2]);

//enum con valores de texto
enum EstadoPedido {
  Pendiente = "PENDIENTE",
  Enviado = "ENVIADO",
  Entregado = "ENTREGADO",
}
let miPedido: EstadoPedido = EstadoPedido.Enviado;
console.log(miPedido);

//enum en una función
function mostrarEstado(estado: EstadoPedido): void {
  if (estado === EstadoPedido.Entregado) {
    console.log("El pedido llegó");
  } else {
    console.log(`El pedido está: ${estado}`);
  }
}
mostrarEstado(EstadoPedido.Pendiente);
mostrarEstado(EstadoPedido.Entregado);

// recorrer los valores de un enum
console.log(Object.values(EstadoPedido));

//tipo literal
// la variable solo puede tener esos valores exactos
type Talle = "S" | "M" | "L";
let miTalle: Talle = "M";
console.log(miTalle);

//tambien con numeros
type Dado = 1 | 2 | 3 | 4 | 5 | 6;
let tirada: Dado = 4;
console.log(tirada);

//tipo literal en una función
type Rol = "admin" | "alumno" | "profe";
function darPermiso(rol: Rol): string {
  if (rol === "admin") {
    return "Acceso total";
  }
  return "Acceso limitado";
}
console.log(darPermiso("admin"));
console.log(darPermiso("alumno"));

//comparacion
//los dos limitan los valores posibles, pero se escriben distinto
enum ColorEnum {
  Rojo = "ROJO",
  Verde = "VERDE",
}
type ColorLiteral = "rojo" | "verde";

let color1: ColorEnum = ColorEnum.Rojo;
let color2: ColorLiteral = "rojo";
console.log(color1);
console.log(color2);

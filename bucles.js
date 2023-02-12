// Declara una variable “let edad = Number”, //
// luego crea un condicional “if” donde hagas una comparación, //
// si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. //
// De lo contrario “NO VÁLIDO”. //
let edad = Number(prompt("Ingrese su edad: "));

if (edad >= 18) {
    console.log("VÁLIDO");
} else {
    console.log("NO VÁLIDO");
}
// Crea un array que contenga mínimo 4 objetos, que a su vez 
// contengan como mínimo 3 claves e imprime todo el array en consola 
// con un bucle “for”.
let peliculas = [  {    nombre: "The Shawshank Redemption",    director: "Frank Darabont",    año: 1994  },  {    nombre: "The Godfather",    director: "Francis Ford Coppola",    año: 1972  },  {    nombre: "The Dark Knight",    director: "Christopher Nolan",    año: 2008  },  {    nombre: "Pulp Fiction",    director: "Quentin Tarantino",    año: 1994  }];

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);
}
// Crear un bucle switch donde simula la venta de entradas 
// al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.
switch (true) {
    case edad < 0:
        console.log("Edad inválida");
        break;
    case edad >= 0 && edad <= 12:
        console.log("Tarifa infantil, 50% de descuento");
        break;
    case edad > 12 && edad < 18:
        console.log("Tarifa juvenil, 30% de descuento");
        break;
    case edad >= 18 && edad < 60:
        console.log("Tarifa normal");
        break;
    case edad >= 60:
        console.log("Tarifa de tercera edad, 20% de descuento");
        break;
}
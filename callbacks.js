/*
    Cuando escuchemos el termino callback no es mas que 
    una funcion esta recibiendo como parametro otra funcion
    y se ejecutara despues de cierto tiempo
 */

// setTimeout(function () {
//   console.log("Hola");
// }, 1000);

const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Josue",
  };

  setTimeout(() => callback(usuario), 1500);
};

getUsuarioByID(10, (user) => console.log(user));

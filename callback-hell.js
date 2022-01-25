/*
    Un callback hell significa que, tendremos un callback
    dentro de otro callback dentro de otro callback y asi 
    sucesivamente
*/
const empleados = [
  {
    id: 1,
    name: "Fernando",
  },
  {
    id: 2,
    name: "Juan",
  },
  {
    id: 3,
    name: "Ambrosio",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = function (id, callback) {
  const empleado = empleados.find((usuario) => id === usuario.id);

  if (!empleado) callback(empleado);
  callback(null, empleado);
};

getEmpleado(4, (err, empleado) => {
  if (err) {
    console.log("ERROR!!");
    console.log(err);
  }

  console.log(empleado);
});

console.log("Prueba");

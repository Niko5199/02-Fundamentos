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

const id = 3;

const getEmpleado = function (id) {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => id === e.id)?.name;
    empleado ? resolve(empleado) : reject("El usuario no existe");
  });
};

const getSalario = function (id) {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => id === s.id)?.salario;
    salario ? resolve(salario) : reject("El usuario no tiene un salario");
  });
};

// getEmpleado(id)
//   .then((empleado) => {
//     if (!empleado) throw new Error("Usuario no definido");
//     getSalario(id)
//       .then((salario) => {
//         if (!salario) throw new Error("Salario no Definido");
//         console.log(`El empleado: ${empleado} tiene un  salario de ${salario}`);
//       })
//       .catch((error) => console.log(error));
//   })
//   .catch((error) => console.log(error));

let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El usuario: ${nombre} y el salario es: ${salario}`)
  )
  .catch((error) => console.log(error));

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

const asin = async function (id) {
  const empleado = await getEmpleado(id);
  const salario = await getSalario(id);

  return `El salario del empleado es: ${empleado} es de ${salario}`;
};

const id = 3;
asin(id).then((msg) => console.log(msg));

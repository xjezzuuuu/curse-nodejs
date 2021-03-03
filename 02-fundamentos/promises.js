const empleados = [
    {
        id: 1,
        nombre: 'Jesus'
    },
    {
        id: 2,
        nombre: 'Alejandro'
    },
    {
        id: 3,
        nombre: 'Padilla'
    }
]

const salarios = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 14000
    },
]

const getEmpleadoById = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    return new Promise((res, rej) => {
        (empleado)
            ?res(empleado)
            :rej(`Empleado con id ${id} no existe!`);
    })
}

const getSalarioById = (id) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    return new Promise((res, rej) => {
        (salario)
            ?res(salario)
            :rej(`Salario con id ${id} no exite!`)
    })     
}

const id = 3;

// getEmpleadoById(id)
//     .then(e => console.log(e))
//     .catch(err => console.log(err));

// getSalarioById(id)
// .then(s => console.log(s))
// .catch(err => console.log(err));

getEmpleadoById(id)
    .then(e => {
        getSalarioById(id)
            .then(s => console.log(`El empleado ${e} tiene un salario de ${s}`))
            .catch(err => console.log(`El empleado ${e} no tiene un salario`))
    })



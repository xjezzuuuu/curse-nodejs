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

const id = 4;

const getInfoUser = async() => {
    try {
        const empleado = await getEmpleadoById(id);
        const salario = await getSalarioById(id);

        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (err) {
        throw err;
    }
}

getInfoUser()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
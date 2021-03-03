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

const salario = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 14000
    },
    {
        id: 3
    }
]

const getEmpleadoById = (id, cb) => {
    const empleado = empleados.find((e) => e.id === id);

    if(empleado){
        cb(null, empleado);
    } else {
        cb(`Empleado con id ${id} no existe!`);
    }
    
}

// console.log(getEmpleadoById(6));

getEmpleadoById(10, (err, e) => {
    if(err){
        console.log('ERROR!!');
        return console.log(err);
    } else {
        console.log('EXISTE!');
        console.log(e);
    }
    
})


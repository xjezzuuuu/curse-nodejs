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

const id = 3;

const getEmpleadoById = (id, cb) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if(empleado){
        cb(null, empleado);
    } else {
        cb(`Empleado con id ${id} no existe!`);
    }
    
}

const getSalarioById = (id, cb) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    if(salario){
        cb(null, salario);
    } else {
        cb(`Salario con id ${id} no existe!`);
    }
    
}

// console.log(getEmpleadoById(6));

getEmpleadoById(id, (err, e) => {
    if(err){
        console.log('ERROR!!');
        return console.log(err);
    } 

    getSalarioById(id, (err, s) => {
        if(err){
            console.log('ERROR!!');
            return console.log(err);
        } 

        console.log(`El empleado ${e} tiene un salario de: ${s}`);
    })    
})




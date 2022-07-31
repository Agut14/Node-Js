const empleados =[{
    id: 1,
    nombre: 'Carlos'
},
{
    id: 2,
    nombre: 'Manolo'
},
{
    id: 3,
    nombre: 'Julián'
}];

const salarios =[{
    id: 1,
    cantidad: 1000
},
{
    id: 2,
    cantidad: null
},
{
    id: 3,
    cantidad: 500
}];


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find( el => el.id === id)?.nombre;

        (empleado) ? resolve(empleado) : reject(`No existe empleado con el id: ${id}`);
    })
}

const getSalario = ( id ) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(el => el.id === id)?.cantidad;

        (salario) ? resolve(salario) : reject(`El empleado con id: ${id}, no tiene salario`);
    })
}

const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado ${empleado} gana ${salario} euros al mes`;
    }
    catch(err){
        throw err;
    }
}

const id = 1;

getInfoUsuario(id)
.then(msg => {
    console.log('DONE');
    console.log(msg)
})
.catch(err => {
    console.log('ERROR');
    console.log(err);
})


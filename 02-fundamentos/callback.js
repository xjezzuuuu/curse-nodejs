// setTimeout(() => {
//     console.log("Hola mundo");
// }, 1000);

const getUserById = (id, cb) => {
    const user = {
        id,
        nombre: 'Jesus'
    }

    setTimeout(() => {
        cb(user);
    }, 1500);
}

getUserById(10, (user) => {
    console.log(user.id);
    console.log(user.nombre.toUpperCase());
});
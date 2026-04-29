async function cargarUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuario = await response.json();
        console.log("Usuarios: ", usuario);
    } catch (error) {
        console.error('Error al cargar el usuario:', error);
    }
}
cargarUsuario();

const tabla = document.getElementById('tablaUsuarios');
const mensaje = document.getElementById('mensaje');

//Consultar los usuarios de la API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (respuesta) {

        //Verificar si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error('Error al consultar los usuarios');
        }

        //Convertir la respuesta a JSON
        return respuesta.json();
    })
    .then(function (usuarios) {

        //Recorrer los usuarios
        usuarios.forEach(function (usuario) {

            //Crear una fila
            const fila = document.createElement('tr');

            //Crear las celdas
            const nombre = document.createElement('td');
            const email = document.createElement('td');
            const telefono = document.createElement('td');
            const empresa = document.createElement('td');

            //Asignar los datos
            nombre.textContent = usuario.name;
            email.textContent = usuario.email;
            telefono.textContent = usuario.phone;
            empresa.textContent = usuario.company.name;

            //Agregar las celdas a la fila
            fila.appendChild(nombre);
            fila.appendChild(email);
            fila.appendChild(telefono);
            fila.appendChild(empresa);

            //Agregar la fila a la tabla
            tabla.appendChild(fila);
        });

        //Mostrar mensaje de éxito
        mensaje.textContent = 'Usuarios cargados correctamente';

        //Mostrar mensaje en consola
        console.log('Los datos fueron obtenidos correctamente');
    })
    .catch(function (error) {

        //Mostrar el error
        mensaje.textContent = 'Error al cargar los usuarios';
        console.error('Error:', error);
    });

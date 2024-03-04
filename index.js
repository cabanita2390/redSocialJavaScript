
const usersDataBase = [
    {
        userName: "andres",
        password: "123"
    },
    {
        userName: "caro",
        password: "456"
    },
    {
        userName: "mariana",
        password: "789"
    }
]

const userTimeLine = [
    {
        userName: "Estefany",
        timeline: "Me encanta JavaScript"
    },
    {
        userName: "Oscar",
        timeline: "Bebeloper es lo mejor"
    },
    {
        userName: "Mariana",
        timeline: "Me gusta el cafe"
    },
    {
        userName: "Andres",
        timeline: "No quiero trabajar"
    }
]

/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña 
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
3.Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

// let usuario = document.querySelector('#username').
// console.log(usuario)

let usuario = "";
let contraseña = "";
let formLoginContainer = "";
const loginContainer = document.getElementById("loginContainer");
const loginForm = document.getElementById("loginForm");

function validarUsuario() {
    // Obtener el valor actualizado del campo de usuario
    usuario = document.getElementById("username").value;

    for (let i = 0; i < usersDataBase.length; i++) {
        if (usersDataBase[i].userName === usuario) {
            return true;
            
        }
    }
    return false;
}

function validarContraseña() {
    // Obtener el valor actualizado del campo de contraseña
    contraseña = document.getElementById("password").value;

    for (let i = 0; i < usersDataBase.length; i++) {
        if (usersDataBase[i].password === contraseña) {
            return true;
        }
    }
    return false;
}

function blanquear(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


function mostrarMensajeBienvenida() {

    // Crear un elemento de mensaje de bienvenida
    const mensajeBienvenida = document.createElement("p");
    mensajeBienvenida.textContent = "¡Bienvenido! Has iniciado sesión con éxito.";

    // Darle una clase al elemento <p>
    mensajeBienvenida.classList.add("bienvenida-message");

    // Reemplazar el formulario con el mensaje de bienvenida
    loginContainer.replaceChild(mensajeBienvenida, loginForm);
}

function mostrarMensajeDeError() {
    
    // Crear un elemento de mensaje de error
    const mensajeDeError = document.createElement("p");
    mensajeDeError.textContent = "¡¡ Usuario o contraseña incorrectos !!";
    
    // Darle una clase al elemento <p> de error
    mensajeDeError.classList.add("error-message");

    // Insertar el párrafo de mensaje de error después del botón de inicio de sesión
    const botonInicioSesion = document.querySelector("#loginContainer button");
    botonInicioSesion.insertAdjacentElement('afterend', mensajeDeError);
}



function verficar() {

    if (validarUsuario() === true) {
        
        if (validarContraseña() === true) {
            console.log('Usuario y contraseña correctos')
            mostrarMensajeBienvenida();

        } else {
            console.log('Usuario o contraseña incorrectos')
            mostrarMensajeDeError();
            blanquear();
        }

    } else {
        console.log('Usuario o contraseña incorrectos')
        mostrarMensajeDeError();
        blanquear();
    }
    
}










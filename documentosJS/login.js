//Selectores
//Input Email
const inputEmail = document.querySelector('#email');
//Input password
const inputpassword = document.querySelector('#password');

//Form login
const formLogin = document.querySelector('#form-login');

/*EVENTOS*/
//Evento para formulario login
formLogin.addEventListener("submit", (e) => {
    //Con esto eliminamos por defecto la función que tiene submit que es enviar o en este caso es que nos re dirige a la pagina de administradores
    e.preventDefault();

    //Extraemos los valores contenido dentro de los  inputs
    const emailUser = inputEmail.value;
    const passwordUser = inputpassword.value;

    /**fetch: GET , POST, PUT, PATCH, DELETE */
    /**fetch method: GET defecto */

    getEmailAndUser(emailUser,passwordUser)
});


/**Función para obtener el Email y el UserPass o la verificación de que esta registrado en la base de datos */
async function getEmailAndUser(email,password){
    /**URL de users desde localhost */
    URL = `http://localhost:3000/users?email=${email}`;

    /**Respuesta que devuelve el localhost */
    const response = await fetch(URL);
    /**Traducir la respuesta en lenjuaje JS */
    const data = await response.json();

    /**Verficación de correo y contraseña */
    //Entramos a las diferentes listas que existen dentro de la lista de users
    if (data.length) {
        //entramos a password y decimos que si  la contraseña es igual a la que hemos introducido nos muestre un mensaje de pasaste las credenciales
        if(data[0].password == password) {
            console.log("Pasaste las credenciales");
            /**Guardamos el acceso */
            localStorage.setItem('verificacion',"true");
            //Redireccionar a una pagina de administradores
            window.location.href = "administrator.html"
        } else{ //Si no es de contraseña incorrecta
            console.log("Contraseña incorrecta");
        };
    }else { //Pero si el correo no existe dentro de la base de datos lanza un mensaje de que el correo no existe
        console.log("No existe el correo");
    };
};




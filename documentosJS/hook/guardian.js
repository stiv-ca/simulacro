(
    /**Buscar nombre de archivo */
    () =>{
        /**Buscar ruta actual */
        const rutaArchivo = window.location.pathname; 

        const nombreArchivo = rutaArchivo.substring(rutaArchivo.lastIndexOf('/')+1);

        console.log(nombreArchivo);

        /**Lista de archivo protegido */
        const rutasProtegidas = ["administrator.html"];
        /**Buscar en el localStorage la verificacion */
        const verificacion = localStorage.getItem("verificacion");

        if (verificacion != "true" && rutasProtegidas.includes(nombreArchivo)) {
            window.location.href="index.html"
        };
    }
)();
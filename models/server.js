const express = require('express');
require('dotenv').config();
const cors = require('cors');
// decide qué datos o recursos externos pueden entrar o ser 
//solicitados por tu app desde otros dominios.


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRutas = '/api/usuarios/';

        //middlewares
        this.middlewares();

        //estos mildelware son funciones que siempre se van a levantar cada que 
        //leventamos nuestro servidor

        /*los middlewares son como funciones normales que se ejecutan en cadena, 
        una tras otra, dependiendo del flujo de la aplicación. Cada middleware tiene la opción de:
        Detener el flujo y enviar una respuesta, o
        Pasar el control al siguiente middleware o ruta usando next().*/

        //rutas de mi aplicacion 
        this.rutas();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //El parseo o parsing es el proceso de analizar una cadena 
        //de texto o datos y convertirla en un formato estructurado
        //que sea comprensible para un programa.

        //lectura u parceo
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    //metodo de las rutas
    rutas(){
        //a este midelware le vamos aplicacar ciertas rutas
        this.app.use(this.usuariosRutas, require('../routes/usuarios'))
    }
 
    //metodo del puerto 
    listen(){
        //el puerto es el punto de acceso donde llegan las solicitudes 
        // pueto activo o escuchando las solicitudes
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    }

}
module.exports = Server;
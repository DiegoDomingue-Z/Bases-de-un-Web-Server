const { Router } = require('express');
const { usuarioGet, usuarioPUT, usuarioPOST, usuarioPATCH, usuarioDELETE } = require('../controllers/usuarios');
const router = Router();
//llamamos esa funcion de express ya desestructurada
//para manejar las rutas


//peticion get:  Obtener datos
router.get('/', usuarioGet);

//peticion: put
//Actualizar por completo un recurso existente en el servidor

//Los dos puntos (:) en una ruta indican que estás definiendo un parámetro de ruta.

//Express captura automáticamente el valor de ese parámetro cuando se hace una solicitud
// a una URL que coincide con la ruta definida
router.put('/:idDelUsuario',  usuarioPUT);


//peticion post:
// Enviar datos al servidor para que los procese o almacene.
router.post('/', usuarioPOST);


//peticion patch
//Actualizar parcialmente un recurso existente.
router.patch('/', usuarioPATCH);

//peticion
//Eliminar un recurso en el servidor.
router.delete('/', usuarioDELETE);



module.exports = router;
const { response } = require('express');


const usuarioGet = (req, res = response) => {
     
    const { nombre= 'no name' } = req.query;
    //en la ruta lo demos colocar como ruta?nombre='diego'
    //si el usuario no coloca el nombre podemos colocar 
    //un valor por defecto 

    //res es la repues o que el cliente resive en este caso le estamos
    //enviando una respuesta en formato json
    //podemos devolver directamente el estatus cuando haga la solicitud
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'obtener datos',
        descripcion: 'peticion get ',
        nombre : nombre
    })
}


const usuarioPOST = (req, res = response) => {

    // la recuest es la infomacion que esta solicitando el usuario

    //Estás creando una variable constante llamada body que almacena
    //el contenido del cuerpo de la solicitud (es decir, req.body).
    //El objeto req.body contiene los datos que el cliente envía al
    //servidor

    const cuerpo = req.body;

    //podemos desestructurar el body sin necesidad de obteener datos que no nos interesan
    const { nombre } = req.body

    res.status(201).json({
        estatus: 'Todo chido',
        mensaje: 'enviar datos',
        descripcion: 'peticion POST ',
        solicitud: cuerpo,
        nombre: nombre
    })
}


const usuarioPUT = (req, res = response) => {

    const { idDelUsuario } = req.params;

    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'Actualizar',
        descripcion: 'peticion PUT ',
        id: idDelUsuario
       
    })
}


const usuarioPATCH = (req, res = response) => {
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'Actualiza solamente uno a la ves',
        descripcion: 'peticion PATCH '
    })
}


const usuarioDELETE = (req, res = response) => {
    res.status(403).json({
        estatus: 'Todo chido',
        mensaje: 'elimina',
        descripcion: 'peticion DELETE'
    })
}

module.exports = {
    usuarioGet,
    usuarioPOST,
    usuarioPUT,
    usuarioPATCH,
    usuarioDELETE
}
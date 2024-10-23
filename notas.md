# diferencia entre el web server y el rest server 

* el res server nos va permir servir contenido estatico tambien 
nos va servir para poder regresar informacion demiante comunicacion por json 

# flujo de solicitudes con las rutas y sando los middlawe 
El usuario hace una solicitud HTTPS con el método GET a la ruta https://tu-servidor.com/api/usuarios/.

Express verifica la ruta base:

En tu código, has registrado la ruta base this.usuariosRutas, que podría ser algo como '/api/usuarios'.
Como la solicitud coincide con esta ruta (/api/usuarios), Express redirige la solicitud al módulo de rutas correspondiente, que es require('../routes/usuarios').
El middleware busca la ruta correcta:

Express ahora entra al archivo ../routes/usuarios, donde tienes definidas varias rutas.
El cliente hizo una solicitud GET a /api/usuarios/, lo que coincide con la ruta router.get('/') definida en ese archivo.
Se ejecuta la función que maneja la solicitud GET:

# middware
Un middleware en Express (o en muchas otras aplicaciones basadas en Node.js) recibe tres parámetros principales:

req (Request): El objeto de solicitud (request) que contiene toda la información enviada por el cliente, como los parámetros, cuerpo de la solicitud, headers, entre otros.

res (Response): El objeto de respuesta que se utilizará para enviar la respuesta al cliente. Con este objeto puedes devolver datos, configurar el código de estado HTTP, etc.

next (Next): Una función que se llama para pasar el control al siguiente middleware en la pila. Si no llamas a next(), el flujo de ejecución se detendrá en el middleware actual y no continuará al siguiente.


# parceo 
El parseo o parsing es el proceso de analizar una cadena de texto o datos y convertirla en un formato estructurado que sea comprensible para un programa. Este término es común en programación cuando trabajamos con datos que llegan en un formato determinado (como texto, JSON, XML, etc.) y necesitamos transformarlos en un formato que nuestras aplicaciones puedan manipular fácilmente.

# para que sirve el ? en la rutas 
Los parámetros de consulta se envían en la URL después de un signo de interrogación (?). Se utilizan generalmente para filtrar o modificar la información que se está solicitando.

ejemplo 
* /api/usuarios?nombre=Juan&edad=30

const usuarioGET = (req, res = response) => {
    const { nombre, edad } = req.query;

    res.status(200).json({
        estatus: 'Todo chido',
        mensaje: 'Datos del usuario',
        nombre: nombre, // 'Juan'
        edad: edad // '30'
    });
}

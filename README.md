# EL RESTSERVER 
nos va servir para poder regresar informacion demiante comunicacion por json 

# FLUJO DE SOLICITUDES USANDO LOS MIDDLEWARE
El usuario hace una solicitud HTTPS con el método GET a la ruta 
*  Ejemplo
https://tu-servidor.com/api/usuarios/.

Express verifica la ruta base:

Express redirige la solicitud al módulo de rutas correspondiente, que es require('../routes/usuarios').
El middleware busca la ruta correcta:

# MIDDLEWARE
 en Express (o en muchas otras aplicaciones basadas en Node.js) recibe tres parámetros principales:

* req (Request):
 El objeto de solicitud (request) que contiene toda la información enviada por el cliente, como los parámetros, cuerpo de la solicitud, headers, entre otros.

* res (Response):
 El objeto de respuesta que se utilizará para enviar la respuesta al cliente. Con este objeto puedes devolver datos, configurar el código de estado HTTP, etc.

* next (Next):
 Una función que se llama para pasar el control al siguiente middleware en la pila. Si no llamas a next(), el flujo de ejecución se detendrá en el middleware actual y no continuará al siguiente.

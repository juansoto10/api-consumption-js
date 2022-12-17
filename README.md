# api-consumption-js

API consumption with JavaScript


## ¿Qué es una API REST?

Una API de REST, o API de RESTful, es una interfaz de programación de aplicaciones (API o API web) que se ajusta a los límites de la arquitectura REST y permite la interacción con los servicios web de RESTful. El informático Roy Fielding es el creador de la transferencia de estado representacional (REST).

Las API son conjuntos de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Suele considerarse como el contrato entre el proveedor de información y el usuario, donde se establece el contenido que se necesita por parte del consumidor (la llamada) y el que requiere el productor (la respuesta).Por ejemplo, el diseño de una API de servicio meteorológico podría requerir que el usuario escribiera un código postal y que el productor diera una respuesta en dos partes: la primera sería la temperatura máxima y la segunda, la mínima.

En otras palabras, las API le permiten interactuar con una computadora o un sistema para obtener datos o ejecutar una función, de manera que el sistema comprenda la solicitud y la cumpla.

Imagínelas como si fueran los mediadores entre los usuarios o clientes y los recursos o servicios web que quieren obtener. Con ellas, las empresas pueden compartir recursos e información mientras conservan la seguridad, el control y la autenticación, lo cual les permite determinar el contenido al que puede acceder cada usuario.

Otra ventaja de las API es que usted no necesita saber cómo se recibe el recurso ni de dónde proviene.

Así es como funciona una API:

1. Una aplicación cliente inicia una llamada a la API para recuperar información, también conocida como solicitud (Request). Esta solicitud se procesa desde una aplicación al servidor web a través del Identificador de Recursos Uniforme (URI) de la API e incluyen un verbo de petición como GET, POST, PUT o DEL, encabezados (headers), y a veces un cuerpo de petición (body).

2. Después de recibir una solicitud válida, la API hace un llamado a un programa externo o un servidor web.

3. El servidor envía una respuesta (Response) a la API con la información solicitada.

4. La API transfiere los datos a la aplicación solicitante inicial.


## Flujo de comunicación entre usuarios, frontend y backend

### Server Side Rendering - SSR

Las SSRs son páginas que necesitan traer diferentes archivos HTML del servidor cada vez que el usuario navega por nuestra aplicación, es decir, casi todas las veces que damos click en un link o botón. Aunque estas páginas tienen un tiempo de carga muy corto, la carga debe repetirse.

### Single Page Applications - SPA

Las SPAs son páginas que siempre cargan el mismo archivo HTML. Este, a su vez, carga un archivo gigante de JavaScript con toda la lógica de nuestra apliacación (por ejemplo, usando React.js).

Estas páginas tienen una carga inicial muy lenta, ya que no podremos ver la información importante hasta que termine de cargar el archivo de JavaScript. Pero una vez termina la carga inicial, las SPAs son muy rápidas, incluso al navegar por diferentes secciones de nuestra aplicación.

Como el archivo de JavaScript tiene todo el código de nuestra aplicación, el tiempo de navegación pasa de segundos a milisegundos. No necesitamos hacer más requests al servidor. Pero en mucho casos debemos esperar algunos segundos para que termine la carga inicial y podamos utilizar la aplicación.

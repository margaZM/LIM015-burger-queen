# :star2:BURGER QUEEN :hamburger:

## Índice
* [1. Definición del proyecto]()
* [2. Historias de usuario]()
* [3. Objetivos de aprendizaje]()
* [4. Prototipo]()
* [5. Plan de acción]()
* [6. Recursos]()
* [7. Autores]()

***
## 1. Definición del proyecto :pencil: 
Un pequeño restaurante de hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente. 

En la vista del mesero se muestra dos menús (desayuno y resto del día), cada uno con todos sus productos. El mesero debe poder ir eligiendo qué productos agregar y estos se reflejan en el resumen del pedido con el costo total. 

Los pedidos se trasladan a la vista del cocinero quien indica con tan solo un botón cuando este ya ha sido preperado y asi el mesero pueda pasar a retirarlo y entregarlo de forma rápida a los clientes.
 
Este proyecto fue realizado usando la librería React Js y con Firebase para el manejo de la base de datos.


## 2. Historias de usuarios :woman: :man:

**Usuario:** Mesero.

| Historias de usuario | Criterios minimos de aceptación | Definición de terminado |
| -- | -- | -- |
|**Historia 1:** *Yo como mesero quiero registrarme en la app:* con mi correo y contraseña y mi perfil de trabajador para acceder a la app. | Notificar al mesero mediante alertas en caso de cometer un error al registrarse, fallas de internet, correo registrado y/o registro exitoso y almacenar los datos en firestore. | Cuando el mesero logre crear su cuenta con éxito la información queda almacenada en firebase y se le envia un alerta de información. |
|**Historia 2:** *Yo como mesero registrado quiero ingresar a la app:* mediante mi correo electrónico para loguearme de una manera fácil. | Validar las credenciales ingresadas por el mesero para el inico de sesión, en caso de olvido permitir recuperar la contraseña y redireccionarlo al home de acuerdo a su rol en caso de inicio de sesión exitoso. | El mesero logra cambiar la contraseña en caso de olvido y puede redireccionar correctamente a la vistas de acuerdo a su rol. |
|**Historia 3:** *Yo como mesero quiero saber cuánto cobrar:* y enviar la orden a la cocina para evitar errores y que se puedan ir preparando en orden.| Visualizar en modo de lista cada productos con su cantidad y precio y agregar cada pedido en una orden para enviar a la cocina. | Notificar al mesero que el pedido se ha enviado a la cocina de manera exitosa. |
|**Historia 4:** *Yo como mesero quiero ver los pedidos que están preparados:* para entregarlos rápidamente a los clientes que las hicieron. | Mostrar sección de platos listos ordenados de acuerdo al tiempo de espera con un botón para indicar que ya fue entregado. | Solo el mesero puede tener acceso a la sección de productos listos para llevar el control de los productos entregados. |
|**Historia 5:** *Yo como mesero registrado quiero cerrar sesión de la app:*  cuando finalice mi turno para relevar al siguiente. |Mostrar un botón para salir y al hacer click el mesero debe salir de su cuenta exitosamente. | El mesero logra salir de su cuenta exitosamente y es redirigido a la página de inicio.|

**Usuario:** Jefe de cocina.

| Historias de usuario | Criterios minimos de aceptación | Definición de terminado |
| -- | -- | -- |
|**Historia 1:** *Yo como Jefe de cocina quiero registrarme en la app:* con mi correo y contraseña y mi perfil de trabajador para acceder a la app. | Notificar al Jefe de cocina mediante alertas en caso de cometer un error al registrarse, fallas de internet, correo registrado y/o registro exitoso y almacenar los datos en firestore. | Cuando el Jefe de cocina logre crear su cuenta con éxito la información queda almacenada en firebase y se le envia un alerta de información. |
|**Historia 2:** *Yo como Jefe de cocina registrado quiero ingresar a la app:* mediante mi correo electrónico para loguearme de una manera fácil. | Validar las credenciales ingresadas por el Jefe de cocina para el inico de sesión, en caso de olvido permitir recuperar la contraseña y redireccionarlo al home de acuerdo a su rol en caso de inicio de sesión exitoso. | El Jefe de cocina logra cambiar la contraseña en caso de olvido y puede redireccionar correctamente a la vistas de acuerdo a su rol. |
|**Historia 3:** *Yo como Jefe de cocina quiero ver los nuevos pedidos en orden:* para saber cuáles debo preparar primero. | Mostrar sección de las ordenes con los datos del cliente y pedido, ordenados de manera ascendente. | Solo el Jefe de cocina puede tener acceso a la sección de productos en preparación para llevar el control de los productos listos. |
|**Historia 5:** *Yo como Jefe de cocina registrado quiero cerrar sesión de la app:*  cuando finalice mi turno para relevar al siguiente. |Mostrar un botón para salir y al hacer click el Jefe de cocina debe salir de su cuenta exitosamente. | El Jefe de cocina logra salir de su cuenta exitosamente y es redirigido a la página de inicio.|

## 5. Plan de acción :writing_hand:

El plan de acción lo manejamos desde la plataforma Trello, en donde desarrollamos todas las historias de usuario y las actividades necesarias para definirla como terminado, en este [link](https://trello.com/b/1lusoFnB/burger-queen) se puede ver a detalle la ejecución del mismo.

De igual forma manejamos la plataforma de Github projects para la asignación de milestones por cada sprint y la asignación de issues a cada miembro del equipo.

## 6. Recursos :books: 
* [Rutas](https://www.youtube.com/watch?v=Q9YClZMj9-M)
* [Manejo de rutas en react](https://reactrouter.com/web/guides/quick-start)
* [Documentación oficial Firebase](https://firebase.google.com/docs?authuser=0)
* [Crud en Firebase](https://www.youtube.com/watch?v=jCY6DH8F4oc)
* [Ant Design](https://www.youtube.com/user/ABJ95100/videos)
* [Sweet Alert](https://sweetalert.js.org/docs/)

## 7. Autores :computer:
:woman_technologist: [Andrea Blanco](https://github.com/Andu15) 

:woman_technologist: [Aura Margarita Zambrano Mendez](https://github.com/margaZM)
# Farmacia-360

## Contexto
La aplicación Farmacia-360 es un buscador de farmacias que te permite encontrar establecimientos según diferentes servicios: horario normal, turno 24/7 y emergencias. Puedes realizar las búsquedas utilizando tu ubicación actual o ingresando una dirección específica.<br>

### Descripción
Este proyecto móvil es una tarea de la unidad 3 del curso **"Taller de dispositivos móviles" de UNIACC**, el fin de esta unidad es aprender sobre el desarrollo de aplicaciones móviles híbridas con Ionic, Angular. En esta oportunidad, solo se realiza la cáscara de la aplicación y se sube a este repositorio.

### Características
#### Dentro de todas las cualidades de la aplicación, esta aplicación es capaz de hacer:
- Registrarse e iniciar sesión.
- Filtrar búsqueda de farmacias
	- Horario Normal
	- Turno 24/7
	- Urgencias
- Método de búsqueda
	-Ubicación (GPS)
	-Dirección (Ingresar)
- Despliegue de Farmacias encontradas con los siguientes datos:
	-Nombre Farmacia
	-Horario de Atención
	-Dirección
	-Teléfono


## Versiones de software
- npm: 10.5.2
- Node: 20.13.1
- Ionic: 7.2.0
- Visual Studio Code: 1.89.1

## Profesor:
- José Luis Pino Cofre.
## Alumna:
- Mariela Campillay Gajardo 


# Instalación de plataforma y Herramientas:
###Visual Studio Code:
- Descargar programa desde página oficial
https://code.visualstudio.com/
Seleccionar descarga según Sistema Operativo del computador.
(En mi caso fue macOS universal)

### npm / Node.js:
1. Ir a: nodejs.org/es/download/
2. Descargar y ejecutar instalación
3. Cuando pregunte y haya que activar una casilla, no seleccionar 
4. Next hasta finalizar
5. Revisar Instalació y versiones en consola: 
Nodejs: node --version
Npm: ppm --version

### Ionic:
1. Abrir terminal
2. Ingresar: ppm instal -g @ionic/cli
3. Validar versión: ionic --version

###Crear proyecto Ionic:
1. Crear carpeta del proyecto y posicionarse en ella con la consola 
2. ionic start [nombreProyecto] blank --type=angular
3. ionic serve//inicializa el proyecto en modo web, no en modo app 
4. ionicserve--lab


###Crear paginas para app
1. ionic generate page pages/ nombre pagina //pages = nombre carpeta que tendra las paginas de la app Generar un componente
1. ionic generate component components/header--spec=false


# Información relacionada con el desarrollo

### Logros
- Instalar todas estas herramientas en macOS fue un desafío, dado que la mayoría de la documentación está enfocada en Windows.
- Comprender el formato de trabajo con Ionic fue complicado al principio, pero con el material de apoyo de la unidad y la documentación de Ionic (https://ionicframework.com/docs), fue posible desarrollar toda la estructura de la aplicación.
- Tener conocimientos de HTML fue crucial para lograr el objetivo de este proyecto.

### Problemas enfrentados:
- Estudiar todos los componentes de Ionic puede ser extenso, lo que me tomó más tiempo para lograr el diseño de la aplicación.
- Ionic utiliza numerosos comandos para crear artefactos. Para facilitar el proceso, hice una lista con los códigos más importantes que me sirvieron de apoyo a lo largo del trabajo.

### Perspectiva personal:
- Desde mi perspectiva personal, estudiar todos los componentes de Ionic puede ser extenso, pero a medida que se avanza en el diseño, se aprende más sobre el framework. Lo más destacable es la gran cantidad de información disponible en la web, que resulta de gran utilidad. Para mí, Ionic es una herramienta fácil de usar y, con práctica, programar en ella se vuelve muy entretenido.

# Información relacionada con el desarrollo - Unidad 4 Parte A
## Agregar 2 complementos a la aplicación

### Habilitar el GPS en el desarrollo de la aplicación,
 Para agregar el complemento de geolocalización se siguieron los siguientes pasos:

 1. Obtener API Key desde google para obtener un mapa.
 2. Desde ionic se instala el complemento
	-	npm install @capacitor/geolocation
	-	npm install @types/google.maps
 3.	Agregar en ionic una nueva página llamada "map"
	-	ionic generate page map
 4. Se genera la codificación indicada en: https://capacitorjs.com/docs/apis/app

### Habilitar CAMARA en el desarrollo de la aplicación,
 Para agregar el complemento de camara se siguieron los siguientes pasos:


 1. Desde ionic se instala el complemento
	-	npm install @capacitor/camera
 2.	Agregar en ionic una nueva página llamada "camara"
	-	nionic generate page camera
 3. Se genera la codificación indicada en: https://capacitorjs.com/docs/apis/camera

## Difilcutades encontradas en el proceso de instalación de complementos.
- En el proceso de instalación de los complementos, estos arrojaron errores de vulnerabilidad. Si bien nuestra aplicación es formativa, es algo que se debe considerar al momento de querer publicar una aplicación con ionic con pluggins de capacitor.
- En la generación de la API Key en google, esta solicita ingresar una tarjeta de débito/crédito en el caso que la utilización de esta API sea con mucha demanda. Algo que también se debe tener en cuenta al momento de querer publicar esta app.

## Logros obtenidos en el proceso de instalación de complementos.
- Si bien hay documentación del proceso de instalación de los complementos, tuve que rebuscar mayor detalle en otras comunidades de desarrolladores, esto finalmente es lo más valioso, la comunidad es fundamental en el proceso.

### API PÚBLICA DE FARMACIAS EN CHILE
- https://midas.minsal.cl/farmacia_v2/WS/getLocales.php -- Listado de farmacias del país
- https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php -- Listado de farmacias de turno

# Información relacionada con el desarrollo - Unidad 4 Parte B

### Generacion de Build y APK
- Luego de generar todo el código del aplicativo, se debe generar el build en vscode para luego abrir el archivo en Android Studio. Para ellos se utilizaron los siguientes comandos.
	- **ionic build --prod** // Este comando compilará tu aplicación Angular en la carpeta dist/, optimizada para producción.
	- **npx cap add android** // Este comando agregará la plataforma Android al proyecto Capacitor.
	- **npx cap copy** // Este comando copiará tu aplicación web desde dist/ a la carpeta correspondiente en el proyecto de Capacitor.
	- **npx cap open android** // abrir Android Studio
	- Desde Android Studio Generar APK Build -> Build Bundle(s) / APK(s) -> Build APK(s).


### Logros
 - Se logra habilitar el mapa en el aplicativo
 - Conexión de JSON en aplicativo para que muestre las farmacias existentes
 - El despliegue de las farmacias se realiza por ubicación del usuario o ingresando Región y Comuna
 - Se habilita camara en aplicativo para indicar si existe o no la farmacia indicada por el aplicativo (mejora continua).

### Problemas enfrentados:
- Google modificó la forma en la que se realiza el llamado de la API. Se debió buscar información en documentación proporcionada por google.
- El JSON proporcionado por el gobierno, presenta inestabilidad y confunde si es error del aplicativo o de la URL. Esto se solucionó con el manejo de error dentro del código. 

### Perspectiva personal:
- La codificación del servicio para buscar farmacias según la ubicación o dirección fue uno de los desafíos más grandes que enfrenté. Pensar en la lógica para manejar ambas opciones tomó más tiempo del esperado.

- A medida que avanzaba en el desarrollo del programa, me volví más exigente conmigo mismo y comencé a detallar minuciosamente lo que el programa debería cumplir versus mis propias expectativas. Creo que con más tiempo y un poco más de conocimiento, esta aplicación podría convertirse en una herramienta realmente útil.

- La creación funcional de este programa fue desafiante y en ocasiones estresante, pero sobre todo me llenó de satisfacción poder desarrollar algo que considero podría contribuir positivamente a la sociedad.

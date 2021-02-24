# ProyectoDesarrolloWebNelsonCifuentes

Nelson Steven Cifuentes Chilin
7690-17-2711

GITHUB PAGES:
https://nelsons5.github.io/nelson.github.io/index.html

Template utilizado:
https://themewagon.com/themes/free-bootstrap-ecommerce-template/

De este template se utilizo el header, footer, barra de navegacion, un par de contenedores div y  cuadro con fotos utilizado en pagina principal para mostrar la referencia laboral.

Librerias que vienen con el template:
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet"> --fonts
		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/> --boostrap 3
		<link rel="stylesheet" href="css/font-awesome.min.css"> --fonts
		<link type="text/css" rel="stylesheet" href="css/style.css"/> --css template

        <script src="js/jquery.min.js"></script> --jquery
		<script src="js/bootstrap.min.js"></script> --boostrap js 3
		<script src="js/jquery.zoom.min.js"></script>-- jquery zoom
		<script src="js/main.js"></script> -- js del template

Librerias propias utilizadas para el estilo del contenido creado y funciones especiales:
        <link type="text/css" rel="stylesheet" href="css/misestilos.css"/> --mi css 
        <script src="js/mijavascript.js"></script> -- mi javascript

Librerias utilizadas para realizar las widgets Tabs en la pagina de proyectos.html
        <link rel="stylesheet" href="tabs/jquery-ui.css"/> -- css jquery ui para las tabs
        <script src="tabs/jquery-2.1.3.js"></script> -- jquery 2.1.3
		<script src="tabs/jquery-ui.js"></script> -- js jquery ui

Libreria utilizadas para la pagina de contacto.html
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  

Librerias utilizadas para la pagina skills.html
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

Librerias utilizadas para la pagina referencias.html
		<link rel="stylesheet" type="text/css" href="datatables/datatables.min.css"/> -- css basico 
		<link rel="stylesheet"  type="text/css" href="datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css"> - bootrstrap 4
        <script src="datatables/jquery/jquery-3.3.1.min.js"></script>  --jquery
    	<script type="text/javascript" src="datatables/datatables.min.js"></script> --js datatables


Resumen de funciones por paginas:

Principal:

Se creo un div llamado infoPersonal que encapsula la foto personal y los datos personales.
Para la foto personal se utilizo bigImg y normalImg ubicados en mijavascript.js para animar cuando se pase con el mouse a la imagen.
LOs cuadros de texto utilizados para mostrar los estudios estan hechos con css ubicados en misestilos.css y con las funciones bigTarjet y normalTarjet para la animacion
Los cudros con fotos estan hechos con las clases y metodos que trae el template donde se modifico un poco el estilo en style.css.
Con css se centro la información, se modificaron los colores, letras, bordes, etc.

Proyectos:
Se utilizaron las librerias de jquery ui em css y javascript para lograr hacer las widget tabs.

Contactenos:
Se validan los inputs y el textarea con la funcion validate() ubicado en mijavascript.js. para el boton enviar
Se utiliza la funcion closeContact() ubicado en mijavascripit utilizado para el boton cancelar
El estilo de los inputs y botonoes esta en misestilos.css

Skills:
Utilizamos las funciones forward y backward para los botones adelante y atras cambiando las fotos en el slider.
Utilizamos una funcion de jquery ubicada en la misma pagina html que se usa para mostrar la ventana emergente al seleccionar cualquier foto del slider

Referencias:
utilizamos las clases de boostrap y datatables para el diseño de las tablas, rangos, textos, el input para buscar, etc.
El rango de busqueda fue modificado en la funcion js que esta ubicada en la misma pagina html.








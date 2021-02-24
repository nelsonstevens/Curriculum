/*EFECTO PARA LA FOTO PRINCIPAL 
BIGIMG HACE UN POCO MAS GRANDE Y CAMBIA EL TIPO Y COLOR DEL BORDE
NORMALIMG DEVUELVE LA FOTO A LA NORMALIDAD*/
function bigImg(x) {
    x.style.height = "265px";
    x.style.width = "255px";
    x.style.border="dotted 5px red"
  }
  
  function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "240px";
    x.style.border=""
    x.style.borderTop= "5px inset red";
    x.style.borderBottom = "5px outset black";
  }

  function bigTarget(x) {
    x.style.color = "pink";
    x.style.height = "270px";
    x.style.width = "340px";
    x.style.border="dotted 5px white"
  }
  
  function normalTarget(x) {
    x.style.color = "white";
    x.style.height = "260px";
    x.style.width = "330px";
    x.style.border=""
    x.style.borderRight= "5px solid gray";
    x.style.borderBottom = "5px solid gray";
  }

/*WIDGET TABS*/
  $(document).ready(function() {
    $("#proyectTabs").tabs();
   });

  /*Validar los campos del formulario*/
   function validate(){
     //Obtenemos los valores de los input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("razon").value;
    //Error_message es el que se visualizara cuando exista un error
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    // creamos una variable llamada text en donde escribiremos el tipo de error
    var text;
    if(name.length < 5){
      text = "Ingrese un nombre valido";
      error_message.innerHTML = text;
      return false;
    }
    if(!validarEmail(email) || email.length < 6){
      text = "Ingresa una dirección de correo valida";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length < 30){
      text = "Escribe por lo menos 30 caracteres";
      error_message.innerHTML = text;
      return false;
    }
    alert("DATOS ALMACENADOS CORRECTAMENTE");
    return true;
  }
    function closeContact(){
      alert("Cancelado");
      $("#name").val("");
      $("#email").val("");
      $("#razon").val("");
    }

  function validarEmail(valor) {
    //Esta formula nos indicara si el email es correcto debe ser de esta forma: nombre usuario + @ + servidor + dominio
    //si es corecto devuelve true sino false
    if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))
      return true;
      else 
      return false;
    }

    //SKILLS
    var photos = new Array();
    var wich = 0;

    photos[0]="./img/skills0.png"
    photos[1]="./img/skills1.png"
    photos[2]="./img/skills2.png"
    photos[3]="./img/skills3.png"
    photos[4]="./img/skills4.png"
    photos[5]="./img/skills5.png"

    function forward(){
        if( wich < photos.length-1 )
            wich++;
        else
            wich=0;
        //cambiar la imagen del elemento slider
        imagen = document.getElementById("slider");
        imagen.src = photos[wich];
    }

    function backward(){
        if( wich> 0 )
            wich--;
        else
            wich = photos.length-1;
        //cambiar la imagen del elemento slider
        imagen = document.getElementById("slider");
        imagen.src = photos[wich];
    }
   
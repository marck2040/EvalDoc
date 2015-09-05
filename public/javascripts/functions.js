//var baseurl = "http://udplogin.herokuapp.com/";//baseurl
//var baseurl = "http://evaluacion.univo.edu.sv/";//baseurl
var baseurl = "http://localhost:3000/";
//en ie8 no funciona preventDefault
function ie8SafePreventEvent(event) 
{
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
}

$(document).ready(function()
{
    //al hacer submit al formulario de login
    $("#loginSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //obtenemos los valores que necesitamos para procesar el formulario
        var username = $(".username").val(),
        password = $(".password").val();

        //sencilla comprobacion para que venga algo de información
        if(username.length < 9 || password.length < 2)
        {
            showModal("Error de formulario","Longitud de Usuario o Contraseña muy corta");
            return false;
        }

        //si todo ha ido bien procesamos la petición con node
        $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "login",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    window.location.href = baseurl + "home";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        });  
    });
     /////////
      $("#evalSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //alert("estamos listos");

       if (!$('input[name=radio1]:checked').val() || !$('input[name=radio2]:checked').val() || !$('input[name=radio3]:checked').val() || !$('input[name=radio4]:checked').val() || !$('input[name=radio5]:checked').val() || !$('input[name=radio6]:checked').val() || !$('input[name=radio7]:checked').val() || !$('input[name=radio8]:checked').val() || !$('input[name=radio9]:checked').val() || !$('input[name=radio10]:checked').val() || !$('input[name=radio11]:checked').val() || !$('input[name=radio12]:checked').val() || !$('input[name=radio13]:checked').val() || !$('input[name=radio14]:checked').val() || !$('input[name=radio15]:checked').val() || !$('input[name=radio16]:checked').val() || !$('input[name=radio17]:checked').val() || !$('input[name=radio18]:checked').val() || !$('input[name=radio19]:checked').val() || !$('input[name=radio20]:checked').val() || !$('input[name=radio21]:checked').val() || !$('input[name=radio22]:checked').val() || !$('input[name=radio23]:checked').val() || !$('input[name=radio24]:checked').val() || !$('input[name=radio25]:checked').val() || !$('input[name=radio26]:checked').val() || !$('input[name=radio27]:checked').val() || !$('input[name=radio28]:checked').val() || !$('input[name=radio29]:checked').val() || !$('input[name=radio30]:checked').val())  {          
            showModal("Datos incorrectos","Debe contestar todas las preguntas.");
            return
            }

        //si todo ha ido bien procesamos la petición con node
      $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "procesar",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    //console.log(data);
                    window.location.href = baseurl + "home";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        });  
    });

$("#tablaDec").dataTable({
    bAutoWidth:false,
    "aoColumns":[
        {"bSortable":false},
        {"bSortable":false}
    ],
    "aaSorting":[]
})

$("#tablaDec1").dataTable({
    bAutoWidth:false,
    "aoColumns":[
        {"bSortable":false},
        {"bSortable":false},
        {"bSortable":false},
        {"bSortable":false},
        {"bSortable":false}
    ],
    "aaSorting":[]
})


});


 $("#loginDSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //obtenemos los valores que necesitamos para procesar el formulario
        var username = $(".username").val(),
        password = $(".password").val();

        //sencilla comprobacion para que venga algo de información
        if(username.length < 2 || password.length < 2)
        {
            showModal("Error de formulario","Longitud de Usuario o Contraseña muy corta");
            return false;
        }

        //si todo ha ido bien procesamos la petición con node
        $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "logind",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    window.location.href = baseurl + "homeD";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        });  
    });


 $("#evalDSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //alert("estamos listos");

       if (!$('input[name=radio1]:checked').val() || !$('input[name=radio2]:checked').val() || !$('input[name=radio3]:checked').val() || !$('input[name=radio4]:checked').val() || !$('input[name=radio5]:checked').val() || !$('input[name=radio6]:checked').val() || !$('input[name=radio7]:checked').val() || !$('input[name=radio8]:checked').val() || !$('input[name=radio9]:checked').val() || !$('input[name=radio10]:checked').val() || !$('input[name=radio11]:checked').val() || !$('input[name=radio12]:checked').val() || !$('input[name=radio13]:checked').val() || !$('input[name=radio14]:checked').val() || !$('input[name=radio15]:checked').val() || !$('input[name=radio16]:checked').val() || !$('input[name=radio17]:checked').val() || !$('input[name=radio18]:checked').val() || !$('input[name=radio19]:checked').val() || !$('input[name=radio20]:checked').val() || !$('input[name=radio21]:checked').val() || !$('input[name=radio22]:checked').val() || !$('input[name=radio23]:checked').val() || !$('input[name=radio24]:checked').val() || !$('input[name=radio25]:checked').val() || !$('input[name=radio26]:checked').val() || !$('input[name=radio27]:checked').val() || !$('input[name=radio28]:checked').val() || !$('input[name=radio29]:checked').val() || !$('input[name=radio30]:checked').val())  {          
            showModal("Datos incorrectos","Debe contestar todas las preguntas.");
            return
            }

        //si todo ha ido bien procesamos la petición con node
      $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "procesarD",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    //console.log(data);
                    window.location.href = baseurl + "homeD";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        });  
    });


$("#loginDeSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //obtenemos los valores que necesitamos para procesar el formulario
        var username = $(".username").val(),
        password = $(".password").val();

        //sencilla comprobacion para que venga algo de información
        if(username.length < 2 || password.length < 2)
        {
            showModal("Error de formulario","Longitud de Usuario o Contraseña muy corta");
            return false;
        }

        //si todo ha ido bien procesamos la petición con node
        $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "loginde",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    window.location.href = baseurl + "homeDe";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        }); 
    });


$("#evalDeSubmit").on("submit", function(e) 
    {
        //prevenimos el comportamiento por defecto
        ie8SafePreventEvent(e);

        //alert("estamos listos");

       if (!$('input[name=radio1]:checked').val() || !$('input[name=radio2]:checked').val() || !$('input[name=radio3]:checked').val() || !$('input[name=radio4]:checked').val() || !$('input[name=radio5]:checked').val() || !$('input[name=radio6]:checked').val() || !$('input[name=radio7]:checked').val() || !$('input[name=radio8]:checked').val() || !$('input[name=radio9]:checked').val() || !$('input[name=radio10]:checked').val() || !$('input[name=radio11]:checked').val() || !$('input[name=radio12]:checked').val() || !$('input[name=radio13]:checked').val() || !$('input[name=radio14]:checked').val() || !$('input[name=radio15]:checked').val() || !$('input[name=radio16]:checked').val() || !$('input[name=radio17]:checked').val() || !$('input[name=radio18]:checked').val() || !$('input[name=radio19]:checked').val() || !$('input[name=radio20]:checked').val() || !$('input[name=radio21]:checked').val() || !$('input[name=radio22]:checked').val() || !$('input[name=radio23]:checked').val() || !$('input[name=radio24]:checked').val() || !$('input[name=radio25]:checked').val() || !$('input[name=radio26]:checked').val() || !$('input[name=radio27]:checked').val() || !$('input[name=radio28]:checked').val() || !$('input[name=radio29]:checked').val() || !$('input[name=radio30]:checked').val())  {          
            showModal("Datos incorrectos","Debe contestar todas las preguntas.");
            return
            }

        //si todo ha ido bien procesamos la petición con node
      $.ajax({
            method: "POST",//metodo|verbo con el que procesamos la peticion
            url: baseurl + "procesarDe",//url a la que hacemos la petición
            data: $(this).serialize(),//datos del formulario
            success: function(data){  
                //si los datos de acceso no son correctos
                if(data === "error")
                {
                    showModal("Datos incorrectos","Los datos de acceso son incorrectos.");
                }
                else
                {
                    //console.log(data);
                    window.location.href = baseurl + "homeDe";
                }
            },
            error: function(jqXHR, exception){
                showModal("Error","Error procesando la petición.");
            }
        });  
    });

$("#imprimir").on("click", function(e) 
    {
        $( "#ptr" ).printThis();
    })


//funcion que recibe como parametros el titulo y el mensaje de la ventana modal
//reaprovechar codigo siempre que se pueda
function showModal(title,message)
{
    $("h2.modal-title").text(title);
    $("h4.messageModal").text(message);
    $("#myModal").modal('show');
}

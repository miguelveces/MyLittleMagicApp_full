$(function() {
    var doc = $(document), segundos = 10;
    var id_tema_global;
// var iteracciones=0;
    var preguntas = new Array();
    var array_valores;
// var variable_control = 0;
// var variable_total_frase =0;
    var global_radio = 0;
//si se levanta la pagina de inicio
    temas();
    console.log("iniciar vocabulario");
    var_vocabulario.vocabulario(0);
    var_frases.frases(0);
//console.log("iniciar quiz 1");
    varquiz1.quiz1(0);
//console.log("iniciar quiz 2");
    varquiz2.quiz2(0);
//si se levanta la pagina de vocabulario
    $('#page').on('pageshow', function() {
        temas();
    });

//si se levanta la pagina de vocabulario
    $('#temas').on('pageshow', function() {
        //console.log("res");
        
        if (id_tema_global >0) {
           // alert("este es el inicio " + id_tema_global)
            var_vocabulario.vocabulario(id_tema_global);
            
        }
        else {
         //alert("intenta denuevo") 
         document.location.href="index.html#page";
        }

    });
//si se levanta la pagina de frases
    $('#frases').on('pageshow', function() {
        //var_frases.inicio();  
        var_frases.frases(id_tema_global);
    });
//si se levanta la pagina de quiz
    $('#quiz1').on('pageshow', function() {
        //console.log('frases hh' + id_tema_global);
        varquiz1.quiz1(id_tema_global);
    });

    $('#click').on('click', function() {
        //alert("alerta");
    });
//al levantar la pagina de quiz 2
    $('#quiz2').on('pageshow', function() {
        varquiz2.quiz2(id_tema_global);
    });

    $('#frases_por_temas').on('click', function() {
        $(document).on("vclick", "ul > li > div > div >a", function() {
            //$( this ).append($( this ).getAttribute("id"));
            // $( this ).getAttribute("id");
            //var res = $( this ).attr("hreflang");
            id_tema_global = $(this).attr("hreflang");

        });
    });
//eventos del bton limpiar
    $('#limpiar').on('click', function() {
        $("#ok1").fadeOut();
        $("#ok2").fadeOut();
        $("#ok3").fadeOut();
        $("#ok4").fadeOut();
        $("#ok5").fadeOut();

        $("#bad1").fadeOut();
        $("#bad2").fadeOut();
        $("#bad3").fadeOut();
        $("#bad4").fadeOut();
        $("#bad5").fadeOut();

        $("input[type='radio']").attr("checked", false).checkboxradio("refresh");
        document.getElementById("score").innerHTML="";
       document.getElementById("puntaje").innerHTML="";

        $('.first').removeClass("background-color");
        $('.second').removeClass("background-color");
        $('.third').removeClass("background-color");
        $('.fourth').removeClass("background-color");
    });
    $('#tema_por_libro').on('click', function() {
        $(document).on("vclick", "ul > li > div > div >a", function() {
            //$( this ).append($( this ).getAttribute("id"));
            // $( this ).getAttribute("id");
            //var res = $( this ).attr("hreflang");
            id_tema_global = $(this).attr("hreflang");
        });

    });
//Evento del boton resultado
    $('#resultado').on('click', function() {

        varquiz1.validar();
    });


    $('#reproc').on('click', function() {
        console.log("reproducir");
        reproducirAudio('http:\/\/myenglishtimeapp.net\/audios\/aereopuerto\/v counter.mp3');
    });




    function temas() {

        //para optimizar el tiempo de respuesta se utilizara guardar los datos en cache
        //para ello se crea la variable cache que guarda la llave llamada cache.
        document.getElementById("mensaje").innerHTML="";
        console.time("Peticion AJAX");
        var cache = doc.data("cache");
        var contro_conexion=0;
        if (cache) {
            // if((new Date().getTime()-(segundos * 1000)) < cache.time ) {

            // console.log(cache);
            //console.timeEnd("Peticion AJAX");
            //console.log("dentro");
            document.getElementById("noconexion").innerHTML="";
            return false;
            // }
        }
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            url: "http://myenglishtimeapp.net/services/temasPro.php",
            cache: true,
            crossDomain: true,
            data: {codigo: 8}, //se le envia al servidor la variable codigo la cual contiene el codigo del libro a buscar
            success: function(DATA) {
//                doc.data("cache", DATA);
//                console.log("solo una ves");
                contro_conexion = 1;
                document.getElementById("noconexion").innerHTML="";
                $('#tema_por_libro li').remove();
                $('#tema_por_libro').append('<li data-role="list-divider" ><label class="cabecera">Lista de temas a escoger</label></li>');
                for (i = 0; i < DATA.length; i++)
                {

                    $('#tema_por_libro').append('<li > <a href="#temas" hreflang="' + DATA[i].id + '" > <img src="' + DATA[i].imagen + '"> <h3>' + DATA[i].nombre_tema + '</h3> </a>  </li>');

                }
                document.getElementById("mensaje").innerHTML=DATA[2].mensaje;
                $('#tema_por_libro').listview('refresh');
                //
                $("#tema_por_libro").trigger("create");

            },
            complete: function( ) {
                console.timeEnd("Peticion AJAX");
            },
            error: function(DATA) {                
                console.log("Error de conexion con los servicios MET" + DATA);
            }
            // }); 
        });
        if(contro_conexion == 0){
            document.getElementById("noconexion").innerHTML = "Aseg&uacute;rese que tenga conexi&oacute;n a internet para recargar los datos de la aplicaci&oacute;n.";
          }
    }

    $('#os').on('click', function() {
        varquiz2.click_boton();
    });
});

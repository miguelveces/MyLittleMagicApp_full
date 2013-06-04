$(function(){
     
     // $('#page').on('pageshow', function() {
      
        $.ajax({
        type: "GET",

        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        url: "http://myenglishtimeapp.net/services/temas.php",
        crossDomain: true,     
        data: {codigo :  8},//se le envia al servidor la variable codigo la cual contiene el codigo del libro a buscar
        success: function(DATA) { 
        $('#tema_por_libro li').remove();

        $('#tema_por_libro').append('<li data-role="list-divider">Lista de temas a escoger</li>');                    
           for (i = 0; i < DATA.length; i++)
            {
                                                                                                                                                                                                       
                $('#tema_por_libro').append('<li> <a href="#'+ DATA[i].id +'" id="#'+ DATA[i].id +'"> <img src="'+ DATA[i].imagen +'"> <h3>'+ DATA[i].nombre_tema +'</h3> </a>  </li>');

               // crear_page(DATA[i].id);
                //console.log(jsonArray.nombre_tema);
                //console.log(jsonArray.descripcion_tema);
            }
            $('#tema_por_libro').listview('refresh');
           //$("#tema_por_libro").trigger("create");
        
        },
        error: function(DATA) {
            alert("Error" + DATA);
        }
    // });

     });

    function  crear_page(ids){
        var id = "codigo=8";
        $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        url: "http://myenglishtimeapp.net/services/temas.php",
        crossDomain: true,     
        data: "codigo=8",
        success: function(DATA) { 

        $('#tema_por_libro li').remove();

        $('#tema_por_libro').append('<li data-role="list-divider">Lista de temas a escoger </li>'); 
          
           for (i = 0; i < DATA.length; i++)
            {
                                                                                                                                                                                                   
                $('#tema_por_libro').append('<li> <a href="#'+ DATA[i].id +'" id="#'+ DATA[i].id +'"> <img src="'+ DATA[i].imagen +'"> <h3>'+ DATA[i].nombre_tema +'</h3> </a>  <a id="tema1" href="#descricion" data-rel="dialog">'+ DATA[i].descripcion_tema + '</a>  </li>');

                console.log(DATA[i].id);
                //console.log(jsonArray.nombre_tema);
                //console.log(jsonArray.descripcion_tema);
            }
            $('#tema_por_libro').listview('refresh');
           //$("#tema_por_libro").trigger("create");
        
        },
        error: function(DATA) {
            alert("Error" + DATA);
        }
    });
    }

     $('#tema_por_libro').on('click', function(){
        console.log("saludos");
     }) ;

});

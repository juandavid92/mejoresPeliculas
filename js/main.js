

var imgUrl =  "http://image.tmdb.org/t/p/w185//";

function creaListado(resp){
    
    var res = resp.results;
    for(i=0; i<= res.length ; i++){
        document.getElementById("listaPeliculas").innerHTML += "<div class='listItem'>" +
                                        "<div class='poster-container'> <img src='"+
                                        imgUrl + res[i].poster_path +
                                        "'/></div><div class='detail-container'><h1>" +
                                         res[i].original_title + "</h1><div class='contenido_p' onclick='mostrar("+ res[i].id +");'>Descripci&oacute;n</div>"+
                                         "<p class='par_"+ res[i].id +"'>" +  res[i].overview + "</p>"+   "</div></div>";   
    }
    
}

function query(){
 
 $.ajax({  
       type: "GET",  
       url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58786ad096ac8bfe31522e77ee3e92f8",  
       dataType: "json",  
       success: function(resp){  
        creaListado(resp);
       },  
       error: function(e){  
         alert('Error121212: ' + e);  
       }  
     });
  
}


function mostrar(id_pelicula){
  $('.pop-up').show(100);
  document.getElementById("popuppeli").innerHTML += "<div><h1>" + id_pelicula  + "</h1></div>";
}
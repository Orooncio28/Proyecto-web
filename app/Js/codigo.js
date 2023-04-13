// Cuando el domento este preparado
    $(document).ready(function(){
        // cuando pase el raton por encima del articulo, se hace mas grande
        $("section article").hover(function(){
            $(this).addClass("aumentado")
        })
        // Cuando pase el rato fuera dela rticulo quiero que se haga pequeño d evuelta
        $("section article").mouseout(function(){
            $(this).removeClass("aumentado")
        })
        // cuando haga click en el boton anterior queiro que la tira avance un casilla
        $(".anterior").click(function(){
            var misefase = 0;
            $(this).parent().parent().find(".ribbon").each(function(){
                midesfase = $(this).css("left")
            })
            midesfase = Math.round((midesfase.replace("px","")*1)/100)*100
            midesfase -= 200;
            console.log(midesfase)
            
            $(this).parent().parent().find(".ribbon").each(function(){
                $(this).css("left",(midesfase)+"px")
            })
            
        })
        // cuando haga click en el boton poterior queiro que la tira retroceda  un casilla
        $(".posterior").click(function(){
            var misefase = 0;
            $(this).parent().parent().find(".ribbon").each(function(){
                midesfase = $(this).css("left")
            })
            midesfase = Math.round((midesfase.replace("px","")*1)/100)*100
            midesfase += 200;
            console.log(midesfase)
            
            $(this).parent().parent().find(".ribbon").each(function(){
                $(this).css("left",(midesfase)+"px")
            })    
    })
    // cuando sobre un articulo haga click, 
    $("article").click(function(){
        // a los dettalles le quita la clase abierto
       $(this).parent().parent().next().removeClass("abierto")
       $(this).parent().parent().next().removeClass("muyAbierto")
       // dentro de un segundo y medio carga las nuevas caracteristicas
       var este = $(this)
        setTimeout(function(){
            
            este.parent().parent().next().find("h2").text(titulo)
            este.parent().parent().next().find("h3").text(subtitulo)
            este.parent().parent().next().find("p").text(descripcion)
            este.parent().parent().next().find("img").attr("src", imagen)
            este.parent().parent().next().addClass("abierto")  
        },1500)
        // toma los datos de titlo, texto, etc del articul en le cual he hecho click
            var titulo ="";
            $(this).find("h3").each(function(){
                titulo = $(this).text()
            })
            var subtitulo ="";
            $(this).find("h4").each(function(){
                subtitulo = $(this).text()
            })
            var descripcion ="";
            $(this).find("p").each(function(){
                descripcion = $(this).text()
            })
            var imagen ="";
            $(this).find("img").each(function(){
                imagen = $(this).attr("src")
            })   
    })
    // al ahcer click boton mas informacion hace el bloque mas grande
    $(".mas__info").click(function(){
        $(this).parent().addClass("muyAbierto")
    })
})

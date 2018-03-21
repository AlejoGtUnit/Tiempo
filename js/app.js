var momentoInicial = new Date();

$(document).ready(() => {
    
    console.log("document.ready! -> " + momentoInicial.toLocaleString());
    $("#momentoInicial").html(momentoInicial.toLocaleString());
    
    
    cronometro1 = new Timer();
    cronometro1.start();
    cronometro1.addEventListener('secondsUpdated', function(e){
       $("#cronometro-1-info").html(cronometro1.getTimeValues().toString());
    });
});

function agregarCronometro(){
    
}

$(".glyphicon-accion").bind('click',function(){
    var accion = $(this).data("accion");
    
    if (accion == "play"){
        
    }
    else if (accion == "pause"){
        
    }
    else if (accion == "stop"){
        
    }
    
    console.log($(this).parents(".cronometro").data("cronometro"));
    //$($(".glyphicon-play")[0].parentElement.parentElement.parentElement).data("cronometro")
});


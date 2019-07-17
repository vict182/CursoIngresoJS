function mostrar()
{

    var edad
    var estadocivil
    

    edad = parseInt(document.getElementById ("edad").value )
    estadocivil = parseInt(document.getElementById ("estadoCivil").value ) 



     if ( edad <18 && estadocivil != "Soltero" ) { 

    alert ("Es muy pequeño para NO ser solerto") 

    }

}//FIN DE LA FUNCIÓN
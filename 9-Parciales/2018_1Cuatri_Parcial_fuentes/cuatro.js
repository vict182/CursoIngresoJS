function mostrar()
{

var numero1 = parseInt(prompt("Ingrese el primer numero"))
var numero2 = parseInt(prompt("Ingrese el segundo numero"))   
var resultado

if ( numero1 == numero2 ) {

    alert (numero1 + " " + numero2) 

      } 
    
      if (numero1 > numero2 ) { 

        alert(numero1 - numero2)     }    
        
        if (numero1 < numero2 )  {

            resultado = numero1 + numero2
            
            if (resultado > 10 ) {
    
    alert ( "la suma es " + resultado + " y es mayor a 10") }

    
        { if (resultado < 10) {
               alert (resultado)

            }
        }
       } 
    }


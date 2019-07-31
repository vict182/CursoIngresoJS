function mostrar()
{
 var precio
 var porcentajededescuento
 var preciofinal 
 var descuento

 precio = parseInt(prompt ("precio"))

 porcentajededescuento = parseInt(prompt ("porcetaje de descuento")) 

 descuento = ( precio * porcentajededescuento ) / 100 ;

 preciofinal = precio - descuento ;

 document.getElementById("elPrecioFinal").value = preciofinal ;  
 
}

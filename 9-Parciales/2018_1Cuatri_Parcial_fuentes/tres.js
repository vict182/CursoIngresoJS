function mostrar()
{
 var precio
 var porcentajededescuento
 var preciofinal 

 precio = prompt ("precio")
 precio = parseInt(precio)

 porcetajededescuento = prompt ("porcetaje de descuento")
 porcentajededescuento = parseInt(porcentajededescuento)

 preciofinal = parseInt(precio - porcentajededescuento)

  document.getElementById("elPrecioFinal"). value = preciofinal

}

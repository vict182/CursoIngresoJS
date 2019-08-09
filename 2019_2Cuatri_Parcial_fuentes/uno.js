
function mostrar()
{
 var triangulo ;
 var ladoA ;
 var ladoB ;
 var ladoC ;
 var lados ;
 var resultado ;

 triangulo = prompt("Ingrese un tipo de triangulo") ;

 if (triangulo == "escaleno") {


   ladoA = prompt("Ingrese el valor de lado A") ;
   ladoB = prompt("Ingrese valor de lado B") ;
   ladoC = prompt("Ingrese valor de lado C") ;

   alert ("  los lados del triagulo son   " + " lado A : " + ladoA + "  lado B : " + ladoB + " Lado C : " + ladoC ) ;

 }

if (triangulo == "equilatero") {

  lados = parseInt(prompt("Ingrese el valor de los lados")) ;

  resultado = (lados * 3) ;

   alert ("el perimetro es " + resultado ) ;

}

 }






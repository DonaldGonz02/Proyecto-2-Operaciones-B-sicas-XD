function init(){
    alert("Bienvenido :)");
}
        function sumar(){
//se capturan los valores de los inputs y se almacenan en variables 
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    //se define la variable resultado
     var resultado;
      //verificacion de variables si son cadenas vacias
     if (a ==""){
     a=0;
    }else{a= parseInt(a);}
    if (b ==""){
     b=0;
    }else{b= parseInt(b);}    
      //ejecuto la suma de las variables
        resultado=a+b;
        //muestro el resultado de la operacion
        document.getElementById("resultado").value=resultado
        }
        function restar(){
//se capturan los valores de los inputs y se almacenan en variables 
var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
//se define la variable resultado
var resultado;

//verificacion de variables si son cadenas vacias
 
if (a ==""){
     a=0;
 }else{a= parseInt(a);}

 if (b ==""){
     b=0;
 }else{b= parseInt(b);}
//ejecuto la resta de las variables
resultado=a-b;
//muestro el resultado de la operacion
document.getElementById("resultado").value=resultado
}

function multipliacion(){
//se capturan los valores de los inputs y se almacenan en variables 
var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
//se define la variable resultado
var resultado;

//verificacion de variables si son cadenas vacias
 
if (a ==""){
     a=0;
 }else{a= parseInt(a);}
 if (b ==""){
     b=0;
 }else{b= parseInt(b);}
 //ejecuto la multiplicacion de las variables
resultado=a*b;
//muestro el resultado de la operacion
document.getElementById("resultado").value=resultado
}


function division(){
//se capturan los valores de los inputs y se almacenan en variables 
var a=document.getElementById("a").value;
var b=document.getElementById("b").value;
//se define la variable resultado
var resultado;

 //verificacion de variables si son cadenas vacias
if (a ==""){
     a=0;
 }else{a= parseInt(a);}
 if (b ==""){
     b=0;
 }else{b= parseInt(b);}
 
//ejecuto la dicisión de las variables
resultado=a/b;
//muestro el resultado de la operacion
document.getElementById("resultado").value=resultado
}
// var colores=["rojo","azul","green"];
// for(let color of colores){
//    alert(color);
// }

var changeState=0;

function animatedBar(){
   document.getElementById("barraInfo").classList.toggle("progress-bar-animated");
   
   if (changeState==0) {
      document.getElementById("barraInfo").classList.add("bg-danger");
      changeState=1;      
   }else{
      document.getElementById("barraInfo").classList.remove("bg-danger");
      changeState=0;      
   }

}
var progress=20;

document.getElementById("botonAnimated").onclick = function () {
   animatedBar();
   progress+=10;
   document.getElementById("barraInfo").style.width = progress+"%";
   if (progress>100) {
      document.getElementById("barraInfo").style.width = "0%";
      progress=0;
   }
}

// alert("Hola soy un mensaje externo");

// document.getElementById("demo").onclick = function() {showName();}

// function showName(){
// var numeroDeTelefono= "5541234567";
// var nombre = "Edson" , apellido = "Jiménez";
// document.getElementById("demo").innerHTML = "Hello JavaScript";
// document.getElementById("titulo").innerHTML = nombre+" "+apellido;        
// }

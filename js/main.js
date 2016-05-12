function getTareas(){
   var inputTareas = document.getElementById("inputTareas");
   return inputTareas.value;
}
function tweets(){
   var tarea = getTareas();
   if(tarea!=""){
       doTarea(tarea);
       clean();
   }
}
function doTarea(agregarTarea){
   var newTar= document.getElementById("listTareas");
   //Crear elementos
   var div=document.createElement("div");
   div.className='tarea';
   newTar.appendChild(div);
   var contenido = document.createElement("input");
   contenido.setAttribute("type","checkbox");
   contenido.onchange = function(){
     if(contenido.checked) textoinput.innerHTML=agregarTarea.strike();
      else textoinput.innerHTML=agregarTarea;
   }
   var textoinput=document.createElement('p');
   textoinput.innerHTML=agregarTarea;

   var eliminar = document.createElement("span");
   eliminar.setAttribute("class","fa fa-trash");
   eliminar.onclick = function(){
     listTareas.removeChild(div);
   }

   //Agregar elementos
  div.appendChild(contenido);
  div.appendChild(textoinput);
   div.appendChild(eliminar);

}
function clean(){
   var tex = document.getElementById("inputTareas");
   tex.value="";
   tex.focus();
}

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
   var li=document.createElement("li");
   li.className='tarea';
   newTar.appendChild(li);
   var contenido = document.createElement("input");
   contenido.setAttribute ("type","checkbox");
   contenido.onchange = function(){
     if(contenido.checked) textoinput.innerHTML=agregarTarea.strike();
      else textoinput.innerHTML=agregarTarea;
   }
   var textoinput=document.createElement('p');
   textoinput.innerHTML=agregarTarea;

   var eliminar = document.createElement("span");
   eliminar.setAttribute("class","fa fa-trash");
   eliminar.onclick = function(){
     listTareas.removeChild(li);
   }

   //Agregar elementos
   li.appendChild(textoinput);
   li.appendChild(contenido);
   li.appendChild(eliminar);

}
function clean(){
   var tex = document.getElementById("inputTareas");
   tex.value="";
   tex.focus();
}

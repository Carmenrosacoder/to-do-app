function getText(){
    var tex = document.getElementById("text");
    return tex.value;
}
function tweet(){
    var tarea = getText();
    if(tarea!=""){
        doTarea(tarea);
        clean();
    }
}
function doTarea(agregarTarea){
    var newTar= document.getElementById("newTarea");
    //Crear elelmento
    var elemento = document.createElement("div");
    elemento.className = "tarea";
    elemento.innerHTML = "<i class='fa fa-trash' onclick='trash()'></i>" +agregarTarea+ "<input type='checkbox' aria-label='...' id='checkbox' onclick='select()'>";
    //Agregar elementos
    newTar.appendChild(elemento);

}
function clean(){
    var tex = document.getElementById("text");
    tex.value="";
    tex.focus();
}
function trash(){
    var borrar= doTarea();
    eliminar();
}
function eliminar(borrarT){
    var borrarT = document.getElementById("newTarea");
    borrarT.remove(this.borrarT);

}
function select(){
    var element= document.getElementById('checkbox').strike();
    return element.value;
}

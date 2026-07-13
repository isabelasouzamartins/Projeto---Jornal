export function formComentario() {  
    $("#enviarComentario").click(function () {
        const textarea = document.getElementById("deixeComentario");
        const ExibirComentarios = document.getElementById("ExibirComentarios");
        ExibirComentarios.innerText = textarea.value;        
        localStorage.setItem(ExibirComentarios.innerText, ExibirComentarios.innerText);
    });
}
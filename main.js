function ocultar() {
    document.getElementById("contentEnc").style.display = "none";
}
function verMensaje() {
    document.getElementById("msj_result").style.display = "inline";
}
const button1 = document.getElementById("btn_encp");

button1.addEventListener("click", ()=>{ocultar(); verMensaje()});
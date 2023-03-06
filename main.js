const buttonEncript = document.getElementById("btn_encp");
const buttonDesEncript = document.getElementById("btn_desencp");
const buttonCopy = document.getElementById("btn_copy");
const textAreaEncript = document.getElementById("input_ecript");
const textoDesencript = document.getElementById("msj_desencript");

function encriptar() {
    let contentEnc = textAreaEncript.value;
    let vocalesRemplazar = {
        'e' : "enter",
        'i' : "imes",
        'a' : "ai",
        'o' : "ober",
        'u' : "ufat"
    };
    let nuevoTexto;
    let expresionRegular = new RegExp(Object.keys(vocalesRemplazar).join("|"), "gi");
    nuevoTexto = contentEnc.replace(expresionRegular, function(matched){
        return vocalesRemplazar[matched.toLowerCase()];
    });
    contentEnc = nuevoTexto;
    textoDesencript.innerText = contentEnc;
}

function desencriptar() {
    let contentEnc = textAreaEncript.value;
    let Remplazarvocales = {
        "enter" : 'e',
        "imes" : 'i',
        "ai" : 'a',
        "ober" : 'o',
        "ufat" : 'u'
    };

    let nuevoTexto;
    let expresionRegular = new RegExp(Object.keys(Remplazarvocales).join("|"), "gi");
    nuevoTexto = contentEnc.replace(expresionRegular, function(matched){
        return Remplazarvocales[matched.toLowerCase()];
    });
    contentEnc = nuevoTexto;
    textoDesencript.innerText = contentEnc;
}

function copiarTexto() {
    let seleccion = window.getSelection();
    let rango = document.createRange();
    rango.selectNodeContents(textoDesencript);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    document.execCommand("copy");
    
}

function limpiarTextArea() {
    textAreaEncript.value = "";
}

function ocultar() {
    document.getElementById("contentEnc").style.display = "none";
}
function verMensaje() {
    document.getElementById("msj_result").style.display = "inline";
}

buttonEncript.addEventListener("click", ()=>{ocultar(); verMensaje(); encriptar()});
buttonDesEncript.addEventListener("click", ()=>{ocultar(); verMensaje(); desencriptar()});
buttonCopy.addEventListener("click", ()=>{limpiarTextArea(); copiarTexto()});
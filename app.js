console.log("Ejecutando el sistema")

//Encriptar texto
function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoEncriptado;
}

//Desencriptar texto
function desencriptar(){
    let texto = document.getElementById("output-text").value;
    let textoDesencriptado = texto    
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
}

//Copiar texto desencriptado
function copiar(){
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado")
}
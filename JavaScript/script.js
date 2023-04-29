var txt1 = document.getElementById("input-text");
var txt2 = document.getElementById("inputTextSaida");
var msg = document.getElementById("msg");
txt1.focus();

var btnEncrypt = document.querySelector("#btnEncryptar");
btnEncrypt.onclick = encrypt;

var btnDecrypt = document.querySelector("#btnDecryptar");
btnDecrypt.onclick = decrypt;

function encrypt() {
    if (txt1.value.length == 0) {
        let imgLupa = document.getElementById("lupa");
        imgLupa.setAttribute("src", "/images/lupa.svg");
        msg.innerText = "Nenhuma mensagem encontrada";
    } else {
        let imgLupa = document.getElementById("lupa");
        imgLupa.setAttribute("src", "/images/lupa.svg");
        msg.innerText = "Copie o texto para área de transferencia.";
        document.getElementById("copy").innerHTML =
            '<button id="btn-copiar" class="btn-copiar" onclick="copiar()">Copiar</button>';

        var text = txt1.value;
        var txt = text.replace(/e/gim, "enter");
        var txt = txt.replace(/i/gim, "imes");
        var txt = txt.replace(/a/gim, "ai");
        var txt = txt.replace(/o/gim, "ober");
        var txt = txt.replace(/u/gim, "ufat");
        document.getElementById("inputTextSaida").innerHTML = `${txt}`;
        txt1.value = "";
        txt1.focus();
    }
}
function decrypt() {
    if (txt2.value.length == 0) {
        let imgLupa = document.getElementById("lupa");
        imgLupa.setAttribute("src", "/images/lupa.svg");
        msg.innerText = "Nenhuma mensagem encontrada";
    } else {
        var text = txt2.value;
        var txt = text.replace(/enter/gim, "e");
        txt = txt.replace(/imes/gim, "i");
        txt = txt.replace(/ai/gim, "a");
        txt = txt.replace(/ober/gim, "o");
        txt = txt.replace(/ufat/gim, "u");

        document.getElementById("inputTextSaida").innerHTML = `${txt}`;
        txt1.focus();
    }
}
function copiar() {
    if (txt2.value.length == 0) {
        msg.innerHTML = "Não é possível copiar, pois não há resultados!.";
        let imgLupa = document.getElementById("lupa");
        imgLupa.setAttribute("src", "/images/lupa.svg");
    } else {
        document.querySelector("#inputTextSaida").select();
        document.execCommand("copy");
        msg.innerHTML = "O texto copiado já está na área de transferência!";
    }
}

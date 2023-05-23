//var frase = "Hola como estas";


document.write(frase);
document.write("<br>")

// i = tomar letras min y mayu
// g = toma todo el cambio global
// m = toma saltos de linea

frase = frase.replace(/e/img , "enter" );
frase = frase.replace(/i/img , "imes" );
frase = frase.replace(/a/img , "ai" );
frase = frase.replace(/o/img , "ober" );
frase = frase.replace(/u/img , "ufat" );

// document.write(frase);

function encriptar(){

    let cant = parseInt(prompt("Ingrese un num"));
    var frase = document.getElementById("texDesen").value.toLowerCase();

    for(let i=0; i < cant; i++ ){
        alert(i)
        
        var textoEncriptado = frase.replace(/e/img , "enter" );
        textoEncriptado = textoEncriptado.replace(/i/img , "imes" );
        textoEncriptado = textoEncriptado.replace(/a/img , "ai" );
        textoEncriptado = textoEncriptado.replace(/o/img , "ober" );
        textoEncriptado = textoEncriptado.replace(/u/img , "ufat" );

        document.getElementById("texEncrip").value = textoEncriptado;

        frase = textoEncriptado;
    }


    
};

function desencriptar(){

    let cant = parseInt(prompt("Ingrese un num"));
    var frase = document.getElementById("texDesen").value.toLowerCase();

    for(let i=0; i < cant; i++ ){
        var textoEncriptado = frase.replace(/enter/img , "e" );
        textoEncriptado = textoEncriptado.replace(/imes/img , "i" );
        textoEncriptado = textoEncriptado.replace(/ai/img , "a" );
        textoEncriptado = textoEncriptado.replace(/ober/img , "o" );
        textoEncriptado = textoEncriptado.replace(/ufat/img , "u" );

        document.getElementById("texEncrip").value = textoEncriptado;
        frase = textoEncriptado;
    }
    
    
}

function remplazar(){
    var textoEncriptado = document.getElementById("texEncrip").value;

    //document.write(textoEncriptado);
    document.getElementById("texDesen").value = textoEncriptado;
    //document.getElementById("texDesen").innerHTML = textoEncriptado;
}

function ciclico(){

    for(let i=0; i < 5; i++ ){
        encriptar();
    }

}

//let texto = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

// i = es para que tome letras min y mayu
// g = toma en cuenta todas las letras/palabras del string
// m = toma multiples lineas
// para caracteres especiales usar  ejemplo \. o \?


document.write(texto);
document.write("<br>");

//texto = texto.replace( /o/  , "perro"  );
document.write(texto);

document.write("<br>");
document.write("batata y tv".replace(/a/igm, "perro"));
document.write("<br>");

let textoEncriptado = texto.replace(/e/img , "enter");
textoEncriptado = textoEncriptado.replace(/i/img , "imes");
textoEncriptado = textoEncriptado.replace(/a/img , "ai");
textoEncriptado = textoEncriptado.replace(/o/img , "ober");
textoEncriptado = textoEncriptado.replace(/u/img , "ufat");

document.write(textoEncriptado);
document.write("<br>");

let texDesen = texto.replace(/enter/img , "e");
texDesen = texDesen.replace(/imes/img , "i");
texDesen = texDesen.replace(/ai/img , "a");
texDesen = texDesen.replace(/ober/img , "o");
texDesen = texDesen.replace(/ufat/img , "u");

document.write("<br>");
document.write(texDesen);

function encriptar(){
    var cant = parseInt(prompt("cantidad de iteraciones"));

    var frase = document.getElementById("textDesenc").value.toLocaleLowerCase();
    var textoEncriptado = frase;

    for(let i = 0; i < cant; i++){

        textoEncriptado = textoEncriptado.replace(/e/img , "enter");
        textoEncriptado = textoEncriptado.replace(/i/img , "imes");
        textoEncriptado = textoEncriptado.replace(/a/img , "ai");
        textoEncriptado = textoEncriptado.replace(/o/img , "ober");
        textoEncriptado = textoEncriptado.replace(/u/img , "ufat");


        document.getElementById("textEncrip").value = textoEncriptado;

    }
    

    
}

function pasar(){
    var textoEncriptado = document.getElementById("textEncrip").value;
    document.getElementById("textDesenc").value = textoEncriptado;
    
}

function desencriptar(){

    var cant = parseInt(prompt("cantidad de iteraciones"));
    var frase = document.getElementById("textDesenc").value.toLocaleLowerCase();

    let textoEncriptado = frase;

    for(let i = 0; i < cant; i++){

    textoEncriptado = textoEncriptado.replace(/enter/img , "e");
    textoEncriptado = textoEncriptado.replace(/imes/img , "i");
    textoEncriptado = textoEncriptado.replace(/ai/img , "a");
    textoEncriptado = textoEncriptado.replace(/ober/img , "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img , "u");

    document.getElementById("textEncrip").value = textoEncriptado;
    }

    
}

function copiar(){
    var contenido = document.getElementById("textEncrip");
    contenido.select();
    document.execCommand("copy");
    //document.getElementById("textEncrip").value = "texto copiado!!";
    alert("texto copiado");
}


let resu = "Hola mundo";

function compro(){
    var num = document.getElementById("compro").value;
    num = parseInt(num);

    if(num > 10){
        alert("El numero es mayor a 10")
    }else{
        alert("El numero es menor a 10");
    }
}



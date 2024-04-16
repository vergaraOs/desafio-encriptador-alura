

/*

  // Función para encriptar el texto
function encriptar() {
    var ingresoTexto = document.getElementById("ingresoTexto").value.toLowerCase(); // Convertimos el texto a minúsculas
    var salidaTexto = "";
    
    // Definimos las listas de vocales y consonantes
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    // Iteramos sobre cada letra del texto
    for (var i = 0; i < ingresoTexto.length; i++) {
      var letter = ingresoTexto[i];
      
      // Agregamos la letra original al resultado
      salidaTexto += letter;
      
      // Agregamos una vocal aleatoria
      var randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
      salidaTexto += randomVowel;
      
      // Agregamos una consonante aleatoria
      var randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
      salidaTexto += randomConsonant;
    }
    
    document.getElementById("salidaTexto").value = salidaTexto;
  }
  
  // Función para desencriptar el texto
  function desencriptar() {
    var ingresoTexto = document.getElementById("ingresoTexto").value.toLowerCase(); // Convertimos el texto a minúsculas
    var salidaTexto = "";
    
    // Iteramos sobre cada tercer caracter del texto encriptado
    for (var i = 0; i < ingresoTexto.length; i += 3) {
      var letter = ingresoTexto[i];
      
      // Agregamos solo la letra original al resultado
      salidaTexto += letter;
    }
    
    document.getElementById("salidaTexto").value = salidaTexto;
  }

  //Función para copiar el texto
  function copiarTexto() {
    var outputText = document.getElementById("outputText");
    salidaTexto.select();
    document.execCommand("copy");
  }
  */

  // Función para encriptar el texto
function encriptar() {
  var texto = document.getElementById("ingresoTexto").value;
  var textoEncriptado = encriptarTexto(texto);
  document.getElementById("salidaTexto").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
  var textoEncriptado = document.getElementById("salidaTexto").value;
  var texto = desencriptarTexto(textoEncriptado);
  document.getElementById("ingresoTexto").value = texto;
}

// Función para encriptar el texto según las llaves proporcionadas
function encriptarTexto(texto) {
  // Convertir el texto a minúsculas
  texto = texto.toLowerCase();

  // Aplicar las transformaciones de encriptación
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

// Función para desencriptar el texto según las llaves proporcionadas
function desencriptarTexto(textoEncriptado) {
  // Aplicar las transformaciones de desencriptación
  textoEncriptado = textoEncriptado.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

  return textoEncriptado;
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
  var textoEncriptado = document.getElementById("salidaTexto");
  textoEncriptado.select();
  document.execCommand("copy");
}
// Variable para almacenar el botón Copiar
const botonCopiar = document.querySelector(".copy");

// Función para mostrar el botón Copiar
function mostrarBotonCopiar() {
    botonCopiar.classList.remove("hidden");
}

// Variable para almacenar el texto ingresado
const textArea = document.querySelector(".text-area");

// Variable para almacenar el resultado de la solicitud
const resultado = document.querySelector(".result");

function encriptado(stringEncriptada) {
    // Creando el array
    const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (stringEncriptada.includes(llaves[i][0])) {
            stringEncriptada = stringEncriptada.split(llaves[i][0]).join(llaves[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptado(stringDesencriptada) {
    // Creando el array
    const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (stringDesencriptada.includes(llaves[i][1])) {
            stringDesencriptada = stringDesencriptada.split(llaves[i][1]).join(llaves[i][0]);
        }
    }
    return stringDesencriptada;
}

//funcion para dar funcionalidad al boton de encriptar
function botonEncriptar() {
    const textoEncriptado = encriptado(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value = "";
    resultado.style.backgroundImage = "none";
    mostrarBotonCopiar(); // Llamada para mostrar el botón Copiar
}

//funcion para dar funcionalidad al boton de desencriptar
function botonDesencriptar() {
    const textoEncriptado = desencriptado(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value = "";
    resultado.style.backgroundImage = "none";
    mostrarBotonCopiar(); // Llamada para mostrar el botón Copiar
}

// Función para copiar el texto encriptado
function copiarTexto() {
    resultado.select();
    document.execCommand('copy');
    alert('Has copiado tu texto encriptado 🙊');
}

// Agregar evento de clic al botón Copiar
botonCopiar.addEventListener('click', copiarTexto);

// Inicialmente ocultar el botón Copiar
botonCopiar.classList.add("hidden");
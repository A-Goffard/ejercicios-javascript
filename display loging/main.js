const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const botonVer = document.getElementById("botonVer");
const texto_explicativo1 = document.getElementById("texto_explicativo1");
const texto_explicativo2 = document.getElementById("texto_explicativo2");
const texto_explicativo3 = document.getElementById("texto_explicativo3");
const checkButton = document.getElementById("checkButton");
const botonEnviar = document.getElementById("botonEnviar");
const ojoCerrado = document.getElementById("ojoCerrado");
const ojoAbierto = document.getElementById("ojoAbierto");

const nombreDeterminado = "Aintzane";
const passwordDeterminado = "123Carabinbomban";

ojoAbierto.classList.remove("visible");
ojoAbierto.classList.add("oculto");

botonVer.addEventListener("click", cambiarOjo);

function cambiarOjo (){

    let ojoAbiertox = ojoAbierto;
    let ojoCerradox = ojoCerrado;

    let passwordx = password;

    if (ojoAbiertox.classList.contains("visible")) {
        ojoAbiertox.classList.remove("visible");
        ojoAbiertox.classList.add("oculto");
        ojoCerradox.classList.remove("oculto");
        ojoCerradox.classList.add("visible");

        passwordx.type = "password";

    } else {
        ojoAbiertox.classList.remove("oculto");
        ojoAbiertox.classList.add("visible");
        ojoCerradox.classList.remove("visible");
        ojoCerradox.classList.add("oculto");

        passwordx.type = "text";
    }

}


botonEnviar.disabled = true;

checkButton.addEventListener("click", habilitar);

function habilitar(){
        
    if(checkButton.checked == false){
        botonEnviar.disabled = true;
        botonEnviar.classList.toggle("desactivado");

    }else{
        botonEnviar.disabled = false;
        botonEnviar.classList.toggle("desactivado");
    };
};

botonEnviar.addEventListener("click", enviar);

function enviar(){
    let nombreE = nombre.value;
    let passwordE = password.value;

    let datos = [nombreE, passwordE];

    localStorage.setItem("datosstring", JSON.stringify(datos));
    console.log(nombreE);
    console.log(passwordE);

    if(nombre.value.trim() == nombreDeterminado && password.value.trim() == passwordDeterminado){
        alert("bien!")
        
        texto_explicativo1.classList.add("desaparecido");
        texto_explicativo3.classList.add("desaparecido");
        texto_explicativo2.classList.remove("desaparecido");

/*         texto_explicativo2.classList.toggle("verde"); */

    }else{
        alert("la contraseña no coincide")

        texto_explicativo1.classList.add("desaparecido");
        texto_explicativo2.classList.add("desaparecido");
        texto_explicativo3.classList.remove("desaparecido");

/*         texto_explicativo3.classList.toggle("rojo"); */
    }

}
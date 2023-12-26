document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencia a la pantalla
    let pantalla = document.querySelector(".pantalla");

    // Manejar clics en los botones
    let botones = document.querySelectorAll(".btn");
    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            manejarBoton(boton.innerText);
        });
    });

    // Función para manejar los clics en los botones
    function manejarBoton(valor) {
        switch (valor) {
            case "C":
                pantalla.innerText = "0";
                break;
            case "←":
                if (pantalla.innerText.length > 1) {
                    pantalla.innerText = pantalla.innerText.slice(0, -1);
                } else {
                    pantalla.innerText = "0";
                }
                break;
            case "=":
                try {
                    pantalla.innerText = math.evaluate(pantalla.innerText);
                } catch (error) {
                    pantalla.innerText = "Error";
                }
                break;
            default:
                // Manejar números, operadores y decimales
                if (pantalla.innerText === "0" || pantalla.innerText === "Error") {
                    pantalla.innerText = valor;
                } else {
                    pantalla.innerText += valor;
                }
        }
    }
});

/*
document.addEventListener("DOMContentLoaded", function () {...}: Este evento se dispara
cuando el DOM  está completamente cargado. Al colocar el código de manipulación del DOM dentro
de esta función, nos aseguramos de que los elementos HTML estén disponibles antes de intentar 
interactuar con ellos.

document.querySelector(".pantalla") : Obtiene una referencia al elemento HTML con la clase "pantalla".
Este elemento es donde se mostrarán los números y resultados en la calculadora.

document.querySelectorAll(".btn") : Se obtienen referencias a todos los botones con la clase "btn". 

boton.addEventListener("click", function () {...} : Agrega un evento de clic a cada botón. Cuando se hace 
clic en un botón, se llama a la función manejarBoton() con el texto del botón como argumento.

manejarBoton() : Esta función maneja la lógica de lo que sucede cuando se hace clic en un botón. La lógica
está basada en el texto del botón clicado:
    - "C": Si el botón es "C" (borrar todo), se establece el contenido de la pantalla en "0".
    - "←": Si el botón es "←" (borrar último carácter), se elimina el último carácter de la pantalla.
    - "=": Si el botón es "=" (igual), se intenta evaluar la expresión en la pantalla utilizando math.evaluate 
    de la biblioteca Math.js. Si hay un error durante la evaluación, se muestra "Error" en la pantalla.
    - Número, operador o decimal: Si el botón es un número, operador o decimal, se concatena al contenido actual
    de la pantalla. Si la pantalla muestra "0" o "Error", se reemplaza por el número o símbolo clicado.

slice => sintaxis: cadena.slice(inicio, fin) : Este método slice en JavaScript se utiliza para extraer una porción
de una cadena (string) y devolverla como una nueva cadena.
inicio: Índice donde comienza la extracción (inclusive).
fin: Índice donde termina la extracción (exclusivo).
En el caso "←" de la calculadora: 
    - pantalla.innerText.slice(0, -1): Se toma la cadena actual en la pantalla y se extrae desde el índice 0 hasta el último
    índice excluyendo el último carácter. Esto es equivalente a eliminar el último carácter de la cadena.
    - if (pantalla.innerText.length > 1): Se verifica si la longitud de la cadena en la pantalla es mayor que 1. Esto asegura 
    que siempre haya al menos un carácter en la pantalla después de realizar la operación de retroceso.
    - Si hay más de un carácter, se actualiza la pantalla con la nueva cadena que resulta de eliminar el último carácter. Si 
    solo hay un carácter, se establece la pantalla en "0" para reiniciarla.
En resumen, el caso "←" utiliza slice para eliminar el último carácter de la cadena en la pantalla, lo cual simula el comportamiento
de retroceso en una calculadora, manteniendo la pantalla en "0" si solo hay un carácter.

*/


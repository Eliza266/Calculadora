const display = document.querySelector(".seccion");
const numeros = document.querySelectorAll(".btnN");
const operadores = document.querySelectorAll(".operadores");
const btnIgual = document.getElementById("btnIgual");
const btnBorrar = document.getElementById("btnBorrar");
const btnRaiz = document.getElementById("btnRaiz");
const btnSen = document.getElementById("btnSen");
const btnCos = document.getElementById("btnCos");
const btnTan = document.getElementById("btnTan");
const btnPotencia = document.getElementById("btnPotencia");
const btnBin = document.getElementById("btnBin");
const btnOct = document.getElementById("btnOct");
const btnHex = document.getElementById("btnHex");
const btnDec = document.getElementById("btnDec");

let isRaiz = false;
let isCos = false;
let isSen = false;
let isTan = false;

let expresion = display.innerHTML;
//Actulizar el display
function actDisplay(valor) {
  display.innerHTML = valor;
}

// Agregar numeros

numeros.forEach((numero) => {
  numero.addEventListener("click", () => {
    if (numero.id === "btnPunto") {
      expresion += numero.textContent;
    } else {
      if (display.innerHTML === "0" || display.innerHTML === "Error") {
        expresion = numero.textContent;
      } else {
        expresion += numero.textContent;
      }
    }

    actDisplay(expresion);
  });
});

// Agregar operadores

operadores.forEach((operador) => {
  operador.addEventListener("click", () => {
    expresion += operador.innerHTML;
    actDisplay(expresion);
  });
});
btnIgual.addEventListener("click", () => {
  if (isRaiz === true) {
    if (display.innerHTML < 0) {
      actDisplay("Error");
    } else {
      expresion = display.innerHTML.replace("✓", "");
      console.log(expresion);
      display.innerHTML = Math.sqrt(expresion);
      console.log(Math.sqrt(expresion));
    }
    isRaiz = false;
  } else if (isCos === true) {
    expresion = display.innerHTML.replace("Cos", "");
    const resultado = Math.cos(expresion);
    actDisplay(resultado.toFixed(10));
    isCos = false;
  } else if (isSen === true) {
    expresion = display.innerHTML.replace("Sen", "");
    const resultado = Math.sin(expresion);
    actDisplay(resultado.toFixed(10));
    isSen = false;
  } else {
    try {
      console.log(expresion);
      const resultado = eval(expresion);
      actDisplay(resultado);
    } catch (error) {
      actDisplay("Error");
    }
  }
});
btnBorrar.addEventListener("click", () => {
  expresion = "0";
  actDisplay(expresion);
});
btnRaiz.addEventListener("click", () => {
  isRaiz = true;
  expresion = btnRaiz.innerHTML;
  actDisplay(expresion);
});
btnCos.addEventListener("click", () => {
  isCos = true;
  expresion = btnCos.innerHTML;
  actDisplay(expresion);
});
btnSen.addEventListener("click", () => {
  isSen = true;
  expresion = btnSen.innerHTML;
  actDisplay(expresion);
});
btnTan.addEventListener("click", () => {
  isTan = true;
  expresion = btnTan.innerHTML;
  actDisplay(expresion);
});

// if ((isRaiz = true)) {
//   if (display.innerHTML < 0) {
//     actDisplay("Error");
//   } else {
//     expresion = display.innerHTML.slice(1);
//     const resultado = Math.sqrt(eval(expresion));
//     actDisplay(resultado);
//     isRaiz = false;
//   }
// } else if ((isCos = true)) {
//   expresion = display.innerHTML.slice(3);
//   console.log(expresion);
//   const resultado = Math.cos(eval(expresion));
//   actDisplay(resultado);
//   isCos = false;
// } else

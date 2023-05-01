let inicio = prompt(
  `Para calcular un prestamo presione enter, para salir escriba "s"`
);
let monto = 0 ;//parseInt(prompt(`Ingrese el monto al que desea acceder`));
let cuotas = 0;// parseInt(prompt(`Ingrese el numero de cuotas`));
let resultado = 0;
let resultadoFinal = 0;
const division = (division) => division / cuotas;
const treinta = (treinta) => treinta + treinta * 0.3;
const cincuenta = (cincuenta) => cincuenta + cincuenta * 0.5;
const setenta = (setenta) => setenta + setenta * 0.7;
if (inicio !== "s") {
  monto = parseInt(prompt(`Ingrese el monto al que desea acceder`));
  cuotas = parseInt(prompt(`Ingrese el numero de cuotas`));
  while (monto !== "" && cuotas !== ""&& inicio !== "s") {
    if (cuotas >= 1 && cuotas <= 3 && inicio !== "s") {
      let resultado = parseInt(treinta(monto));
      let resultadoFinal = division(resultado);
      alert(
        `usted debera abonar ${cuotas} pagos de $${resultadoFinal.toFixed(
          2
        )} por un monto total de $${resultado}`
      );
      inicio = prompt(
        `Para calcular un prestamo presione enter, para salir escriba "s"`
      );
      monto = parseInt(prompt(`Ingrese el monto al que desea acceder`));
      cuotas = parseInt(prompt(`Ingrese el numero de cuotas`));
    } else if (cuotas >= 4 && cuotas <= 6 && inicio !== "s") {
      let resultado = parseInt(cincuenta(monto));
      let resultadoFinal = division(resultado);
      alert(
        `usted debera abonar ${cuotas} pagos de $${resultadoFinal.toFixed(
          2
        )} por un monto total de $${resultado}`
      );
      inicio = prompt(
        `Para calcular un prestamo presione enter, para salir escriba "s"`
      );
      monto = parseInt(prompt(`Ingrese el monto al que desea acceder`));
      cuotas = parseInt(prompt(`Ingrese el numero de cuotas`));
    } else if (cuotas > 6 && inicio !== "s") {
      let resultado = parseInt(setenta(monto));
      let resultadoFinal = division(resultado);
      alert(
        `usted debera abonar ${cuotas} pagos de $${resultadoFinal.toFixed(
          2
        )} por un monto total de $${resultado}`
      );
      inicio = prompt(
        `Para calcular un prestamo presione enter, para salir escriba "s"`
      );
      monto = parseInt(prompt(`Ingrese el monto al que desea acceder`));
      cuotas = parseInt(prompt(`Ingrese el numero de cuotas`));
    } else{
      alert("adiós");
     
    }
  }
  
} else{ alert("adiós");}


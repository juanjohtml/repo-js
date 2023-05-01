let inicio = prompt(
  "para calcular prestamo presione enter, para salir presione cualquier letra o numero"
);
const calcular = (a, b) => a/b;
const intereses = x => x+x*0.30;
while (inicio === "") {
  let monto = parseInt(prompt("ingrese el monto del prestamo"));
  let cuotas = parseInt(prompt("ingrese un numero de cuotas"));
  let montoIntereses = parseInt(intereses(monto))
  let prestamo = calcular(montoIntereses,cuotas)
  
 alert(`su prestamo lo debera pagar en ${cuotas} pagos de $${prestamo.toFixed(2)} con un 30% de intereses por un monto total de $${montoIntereses}`)
 let inicio = prompt(
    "para calcular otro prestamo presione enter, para salir presione cualquier letra o numero"
  );
  if(inicio !==""){
    break
  }
}

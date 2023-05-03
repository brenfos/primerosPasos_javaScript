function calcularNotas() {

    let numAlumnos = null;

    while (isNaN(numAlumnos) || numAlumnos === null) {
      numAlumnos = prompt("Ingrese la cantidad de alumnos:");
      if (numAlumnos === null) {
        alert("Ha cancelado la carga de alumnos.");
        return;
      }
      
      numAlumnos = parseInt(numAlumnos);
     
    }
  
    let totalNotas = 0;
  
    for (let i = 0; i < numAlumnos; i++) {
      let total = 0;
      for (let j = 0; j < 3; j++) {
        let nota = null;
        while (isNaN(nota) || nota === null) {
          nota = prompt("Ingrese la nota " + (j + 1) + " del alumno " + (i + 1));
          if (nota === null) {
            alert("Ha cancelado la carga de notas.");
            return;
          }
          nota = parseInt(nota);
          if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("La nota ingresada no es válida. Ingrese un número del 0 al 10.");
          }
        }
        total += nota;
      }

      let promedio = total / 3;
      totalNotas += promedio;
      alert("El promedio del alumno " + (i + 1) + " es " + promedio.toFixed(2));
    }
  
    let promedioGeneral = totalNotas / numAlumnos;
    alert("El promedio general de los " + numAlumnos + " alumnos ingresados es " + promedioGeneral.toFixed(2));
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "El promedio general de los " + numAlumnos + " alumnos ingresados es " + promedioGeneral + "";
  }
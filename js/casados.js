  function actualizarContador() {
    const fechaInicio = new Date("2025-10-04"); // Cambia esta fecha
    const hoy = new Date();

    let años = hoy.getFullYear() - fechaInicio.getFullYear();
    let meses = hoy.getMonth() - fechaInicio.getMonth();
    let dias = hoy.getDate() - fechaInicio.getDate();

    // Ajustar cuando el día actual es menor al día de inicio
    if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
    }

    // Ajustar cuando el mes actual es menor al mes de inicio
    if (meses < 0) {
      años--;
      meses += 12;
    }

    document.getElementById("contador").textContent = 
      `${años} años, ${meses} meses y ${dias} días`;
  }

  actualizarContador();
  setInterval(actualizarContador, 1000 * 60 * 60 * 24); // Se actualiza cada día
console.log(salarios);

//FUNCION PARA BUSQUEDA DE UNA PERSONA
function encontrarPersona(personaEnBusqueda) {
  return salarios.find( (persona) => persona.name == personaEnBusqueda);
  // const person = salarios.find( (persona) => {
  //   return persona.name == personaEnBusqueda;
  // });
  // return person;
}

function medianaPorPersona(nombreDePersona) {
  const trabajos = encontrarPersona(nombreDePersona).trabajos;
  const salariosTotales = trabajos.map( (elemento) => elemento.salario );
  const medianaSalarial = StatdMath.calcularMediana(salariosTotales);
  console.log(medianaSalarial);
}

function proyeccioPersona(nombreDePersona) {
  const trabajos = encontrarPersona(nombreDePersona).trabajos;
  const salariosTotales = trabajos.map( (elemento) => elemento.salario );
  
  let creciemintoPorc = [];

  for (let index = 1; index < salariosTotales.length; index++) {
    const salarioActual = salariosTotales[index];
    const salarioAnterior = salariosTotales[index - 1];
    const aumento = salarioActual - salarioAnterior;
    const porcentajeSueldos = aumento / salarioAnterior;
    creciemintoPorc.push(porcentajeSueldos);
  }
  const medianaPorcentualSalaria = StatdMath.calcularMediana(creciemintoPorc);
  const ultimoSalario = salariosTotales[salariosTotales.length - 1];
  const salarioProyectado = ultimoSalario + (medianaPorcentualSalaria * ultimoSalario);
  return salarioProyectado;
}
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
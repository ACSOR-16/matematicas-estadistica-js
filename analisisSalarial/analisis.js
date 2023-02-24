//ANALISI PERSONAL POR PERSONA
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

// ANALISIS EMRESARIAL
// RESTRUCTURACION DE INFORMACION POR EMPRESA
const empresas = {};
for (const persona of salarios) {
  for (const trabajo of persona.trabajos ) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  } 
}
// console.log(empresas.Freelance);
console.log(empresas["Freelance"]);

function medianaEmpresaYear(empresa, year) {
  if (!empresas[empresa]) {
    console.warn(`no existe la empresa`);
  } else if (!empresas[empresa][year]) {
    console.warn(`no existen moviemintos de salarios`);
  } else {
    return StatdMath.calcularMediana(empresas[empresa][year]);
  }
}

function proyeccionEmpresarial(empresa) {
  if (!empresas[empresa]) {
    console.warn(`no existe la empresa`);
  } else {
    const empresaYears = Object.keys(empresas[empresa]);
    const listaMedianaYears = empresaYears.map((year)=> {
      return medianaEmpresaYear(empresa, year);
    });
    
    let PorcentajesEntrePerido = [];

    for (let index = 1; index < listaMedianaYears.length; index++) {
      const medianaAnualAnterior = listaMedianaYears[index - 1];
      const medianaAnualActual = listaMedianaYears[index];
      const crecimiento =  medianaAnualActual - medianaAnualAnterior;
      const porcentajeCrecimiento = crecimiento / medianaAnualAnterior;
      PorcentajesEntrePerido.push(porcentajeCrecimiento);
    }
    const medianaPorcentualIncremental = StatdMath.calcularMediana(PorcentajesEntrePerido);
    const ultimoPeriodo = listaMedianaYears[listaMedianaYears.length - 1];
    const creciemientoPerido = medianaPorcentualIncremental * ultimoPeriodo;
    const proyeccionAnual = creciemientoPerido + ultimoPeriodo;
    return proyeccionAnual;
  }
}
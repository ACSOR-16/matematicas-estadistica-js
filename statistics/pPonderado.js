const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

// CALCULO DE PROMEDIO PONDERADO
function calcularPromedioPonderado(notes) {
    const notesWithCredit = notes.map((noteObjtec) =>noteObjtec.note * noteObjtec.credit);
    const sumOfNotesWithCredit = notesWithCredit.reduce( (sum = 0, newvalue) => sum + newvalue);
    
    const credits = notes.map((noteObjtec) => noteObjtec.credit);
    const sumOfCredits = credits.reduce( (sum = 0, newvalue) => sum + newvalue );
    
    const promedioPonderador = sumOfNotesWithCredit / sumOfCredits;
    return promedioPonderador;
}

calcularPromedioPonderado(notes);
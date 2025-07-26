function getTimeStamp() {
    return Date.now();
}

function getLongTime(locale = "es-ES") {
    // Validar que el locale sea una cadena válida
    if (typeof locale !== 'string' || locale.trim() === '') {
        throw new Error('El locale debe ser una cadena válida');
    }

    const options = {
        'weekday': 'long', // Corregido: era 'weekDay'
        'year': 'numeric',
        'month': 'long',
        'day': 'numeric',
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short',
    }

    try {
        return new Date().toLocaleString(locale, options);
    } catch (error) {
        throw new Error(`Error al formatear la fecha con locale '${locale}': ${error.message}`);
    }
}

module.exports = {
    getTimeStamp,
    getLongTime
}
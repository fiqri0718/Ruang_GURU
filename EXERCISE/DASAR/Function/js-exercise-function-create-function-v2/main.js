function checkDatatype(datatest) {
    const dataType = typeof datatest;

    switch (dataType) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'function';
        case 'object':
            if (Array.isArray(datatest)) {
                return 'array';
            } else if (datatest === null) {
                return 'null';
            } else {
                return 'object';
            }
            case 'undefined':
                return 'undefined';
            default:
                return 'not recognized';
    }
}

module.exports = {
    checkDatatype
};

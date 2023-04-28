// TODO: answer here

function shortName(name, options) {
    let nameArr = name.split(' ');
    if (nameArr.length !== 2) {
        return 'Invalid Name';
    }
    if (options === 'first') {
        return `${nameArr[0].charAt(0)}. ${nameArr[1]}`;
    } else if (options === 'last') {
        return `${nameArr[0]} ${nameArr[1].charAt(0)}.`;
    } else if (options === 'full') {
        return name;
    }
}

module.exports = shortName
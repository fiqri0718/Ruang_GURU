// TODO: answer here
function addNumber(numStr, options) {
    let hasiladd = "";
    for (let i = 0; i < numStr.length - 1; i++) {
        if (options === "left") {
            hasiladd += parseInt(numStr[i]) + parseInt(numStr[i + 1]);
        }
    }

    for (let i = numStr.length-1; i > 0; i--) {
        if (options === "right") {
            hasiladd += parseInt(numStr[i]) + parseInt(numStr[i - 1]);
        }
    }
    return hasiladd;
}
module.exports = addNumber;
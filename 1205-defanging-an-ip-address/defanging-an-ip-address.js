/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const array = address.split(".").join("[.]")
    return array

};
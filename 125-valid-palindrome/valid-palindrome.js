/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let word=s.split(/[^a-z0-9]+/gi).join("").toLowerCase()
    let reversed=word.split("").reverse().join("")
    return word===reversed

}
    
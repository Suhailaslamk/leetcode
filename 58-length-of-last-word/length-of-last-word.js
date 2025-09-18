/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   

   
    return s.trim().split(/\s+/g).at(-1).length
        
    }
    

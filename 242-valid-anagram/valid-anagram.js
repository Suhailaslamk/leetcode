/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sorted= s.split("").sort().join()
    sorted1=t.split("").sort().join()
    return sorted===sorted1
    
};
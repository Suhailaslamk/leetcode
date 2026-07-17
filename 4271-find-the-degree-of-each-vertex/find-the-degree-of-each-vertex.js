/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const ans = [];
    
    for (let i = 0; i < matrix.length; i++) {
        let degree = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            degree += matrix[i][j];
        }
        ans.push(degree);
    }
    
    return ans;
};
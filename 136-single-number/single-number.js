/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const uniqueArray=nums.filter((num)=> {
        return nums.indexOf(num)===nums.lastIndexOf(num)})[0]
    return uniqueArray
};
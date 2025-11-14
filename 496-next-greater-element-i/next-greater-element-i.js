/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
   
    const nextGreater = new Map();
    const stack = [];

    
    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            const smaller = stack.pop();
            nextGreater.set(smaller, num);
        }
        stack.push(num);
    }

    while (stack.length > 0) {
        nextGreater.set(stack.pop(), -1);
    }

    
    return nums1.map(num => nextGreater.get(num));

};
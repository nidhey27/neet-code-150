// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = {}

    nums.forEach(num => {
        if(hashMap.hasOwnProperty(num)){
            return true
        }
        hashMap[num] = hashMap[num] + 1
    })

    return false
    
};
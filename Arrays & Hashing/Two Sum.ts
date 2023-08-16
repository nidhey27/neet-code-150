// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (hashMap[diff] != undefined) {
            return [hashMap[diff], i]
        }
        hashMap[nums[i]] = i
    }

    return [0, 0]
};
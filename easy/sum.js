let twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      if (target == 2 * nums[i]) {
        return [map.get(nums[i]), i];
      }
    }
  }
  for (let [key, value] of map) {
    let firstArg = key;
    let secondArg = target - firstArg;
    if (firstArg == secondArg) {
      continue;
    }
    if (map.has(secondArg)) {
      return [map.get(firstArg), map.get(secondArg)];
    }
  }
};
let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));

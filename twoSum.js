const twoSum = (nums, target) => {
    const seen = [];
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in seen) {
        return [complement, nums[i]];
      }
      seen[nums[i]] = true;
    }
    return [];
  };
  const nums = [2, 7, 11, 15];
  const target = 18;
  const result = twoSum(nums, target);
  console.log(result);  
    
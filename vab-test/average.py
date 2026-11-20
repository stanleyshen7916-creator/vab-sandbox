def average(nums):
    if not nums:
        raise ValueError("empty list")
    return sum(nums) / len(nums)

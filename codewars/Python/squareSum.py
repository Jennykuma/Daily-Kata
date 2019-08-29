'''
Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example:
for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
'''

def square_sum(numbers):
    result = 0
    for i in range(0, len(numbers)):
        result = result + pow(numbers[i], 2)
    return result

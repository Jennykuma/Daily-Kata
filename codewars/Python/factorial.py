'''
Factorial
Level: 7 kyu
Yor task is to write function factorial
https://en.wikipedia.org/wiki/Factorial
'''

def factorial(n):
    result = 1
    for i in range(n, 1, -1):
        result = result * i
    return result

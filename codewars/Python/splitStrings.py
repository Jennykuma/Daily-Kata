'''
Split Strings
Level: 6 kyu
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character 
of the final pair with an underscore ('_').

Examples:
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
'''

def solution(s):
    list = [s[i:i+2] for i in range(0, len(s), 2)]
    if len(s) % 2 != 0:
        list[len(list)-1] += "_"
    return list

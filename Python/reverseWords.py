'''
Reversed Words
Level: 8 kyu
Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
'''

def reverseWords(str):
    return ' '.join(str.split(" ")[-1::-1])

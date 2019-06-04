'''
Exes and Ohs
Level: 7 kyu
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
'''

def xo(s):
    xCounter = 0
    oCounter = 0
    for i in range(0, len(s)):
        if s[i].lower() == 'x':
            xCounter += 1
        elif s[i].lower() == 'o':
            oCounter += 1
    
    return True if xCounter == oCounter else False
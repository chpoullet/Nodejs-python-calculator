import sys
import os

firstnumber = sys.argv[1]
secondnumber = sys.argv[2]
operator = sys.argv[3]

firstint = float(firstnumber)
secondint = float(secondnumber)

if operator == '1':
    result = firstint + secondint

elif operator == '2':
    result = firstint - secondint

elif operator == '3':
    result = firstint * secondint

elif operator == '4':
    result = firstint / secondint





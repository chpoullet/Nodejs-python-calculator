import sys

firstnumber = sys.argv[1]
secondnumber = sys.argv[2]
operator = sys.argv[3]

firstfloat = float(firstnumber)
secondfloat = float(secondnumber)

if operator == '1':
    result = firstfloat + secondfloat
    print(result)
elif operator == '2':
    result = firstfloat - secondfloat
    print(result)
elif operator == '3':
    result = firstfloat * secondfloat
    print(result)
elif operator == '4':
    result = firstfloat / secondfloat
    print(result)


